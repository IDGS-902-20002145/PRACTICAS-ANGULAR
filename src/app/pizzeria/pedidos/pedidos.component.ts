import { Component } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  pedidos: any[] = [];
  cliente: any = {};
  pizza: any = {
    ingredientes: []
  };
  totalVentas: number = 0;
  editarPedido: boolean = false;
  ventasAcumuladas: any[] = [];
  ventasFiltradas: any[] = [];
  pedidoGuardado: boolean = false; // Variable para indicar si el primer pedido ha sido guardado
  editarPedidoIndex: number = -1;
  primerPedido: boolean = false; // Variable para indicar si el primer pedido ha sido agregado
  filtroVentas: string = 'dia';
  filtroFecha: string = '';
  totalVentasFiltradas: number = 0;


  agregarPedido() {
    const pedido = {
      cliente: this.pedidos.length === 0 ? { ...this.cliente } : this.pedidos[0].cliente,
      pizza: { ...this.pizza },
      subtotal: this.calcularSubtotal()
    };

    if (!this.editarPedido) {
      this.pedidos.push(pedido);
      this.totalVentas += pedido.subtotal;

      if (!this.primerPedido) {
        // Guardar el primer pedido y bloquear los campos de cliente
        this.cliente = pedido.cliente;
        this.primerPedido = true;
      }
    } else {
      const pedidoIndex = this.pedidos.findIndex((p, index) => index === this.editarPedidoIndex);
      if (pedidoIndex > -1) {
        const pedidoOriginal = this.pedidos[pedidoIndex];
        this.pedidos[pedidoIndex] = pedido;
        this.totalVentas -= pedidoOriginal.subtotal;
        this.totalVentas += pedido.subtotal;
      }
    }

    this.pizza = {
      ingredientes: []
    };
    this.editarPedido = false;
    this.editarPedidoIndex = -1;
  }

  quitarPedido(index: number) {
    const pedido = this.pedidos[index];
    this.pedidos.splice(index, 1);
    this.totalVentas -= pedido.subtotal;
  }

  calcularSubtotal() {
    let subtotal = 0;

    switch (this.pizza.tamano) {
      case 'Chica':
        subtotal += 40;
        break;
      case 'Mediana':
        subtotal += 80;
        break;
      case 'Grande':
        subtotal += 120;
        break;
      case 'Jumbo':
        subtotal += 160;
        break;
    }

    if (this.pizza.ingredientes && this.pizza.ingredientes.length > 0) {
      for (const ingrediente of this.pizza.ingredientes) {
        switch (ingrediente) {
          case 'Jamón':
          case 'Piña':
          case 'Champiñones':
          case 'Salchicha':
          case 'Salami':
            subtotal += 10;
            break;
          case 'Chorizo':
            subtotal += 12;
            break;
        }
      }
    }

    return subtotal * (this.pizza.numeroPizzas || 1);
  }

  toggleIngrediente(ingrediente: string) {
    const index = this.pizza.ingredientes.indexOf(ingrediente);
    if (index > -1) {
      this.pizza.ingredientes.splice(index, 1);
    } else {
      this.pizza.ingredientes.push(ingrediente);
    }
  }


  obtenerTotalVentas(): number {
    let totalVentas = 0;

    if (this.filtroVentas === 'dia' && this.filtroFecha) {
      // Obtener el total de ventas por día
      this.ventasFiltradas = this.ventasAcumuladas.filter(venta => venta.fecha.split('T')[0] === this.filtroFecha);
      totalVentas = this.ventasFiltradas.reduce((sum, venta) => sum + venta.totalCompra, 0);
    } else if (this.filtroVentas === 'mes' && this.filtroFecha) {
      // Obtener el total de ventas por mes
      const fecha = new Date(this.filtroFecha);
      const mes = fecha.getMonth() + 1;
      const anio = fecha.getFullYear();
      this.ventasFiltradas = this.ventasAcumuladas.filter(venta =>
        new Date(venta.fecha).getMonth() + 1 === mes && new Date(venta.fecha).getFullYear() === anio
      );
      totalVentas = this.ventasFiltradas.reduce((sum, venta) => sum + venta.totalCompra, 0);
    } else {
      // No hay filtro seleccionado, mostrar todas las ventas acumuladas
      this.ventasFiltradas = this.ventasAcumuladas;
    }

    return totalVentas;
  }




  obtenerTotalVentasAcumuladas(): number {
    return this.ventasAcumuladas.reduce((sum, venta) => sum + venta.totalCompra, 0);
  }

  limpiarFiltro() {
    this.filtroFecha = '';
    this.obtenerTotalVentas();
  }


  terminarPedido() {
    const costoTotal = this.totalVentas;
    const totalCompraActual = this.pedidos.reduce((sum, pedido) => sum + pedido.subtotal, 0);


    const swalOptions: SweetAlertOptions = {
      title: 'Confirmación de Pedido',
      text: `El costo total del pedido es $${costoTotal}. ¿Está de acuerdo?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    };

    Swal.fire(swalOptions).then((result) => {
      if (result.isConfirmed) {
        const ventaAcumulada = {
          cliente: this.cliente,
          fecha: this.cliente.fechaCompra,
          totalCompra: totalCompraActual
        };
        this.ventasAcumuladas.push(ventaAcumulada);
        this.cliente = {};
        this.pizza = {
          ingredientes: []
        };
        this.totalVentas = 0;
        this.pedidos = [];
        this.pedidoGuardado = false; // Reiniciar el estado del primer pedido guardado
        this.primerPedido = false; // Reiniciar el estado del primer pedido agregado
      }
    });
  }

  editarArticulo(index: number) {
    const pedido = this.pedidos[index];
    this.editarPedido = true;
    this.editarPedidoIndex = index;
    this.cliente = { ...pedido.cliente };
    this.pizza = { ...pedido.pizza };
    this.pizza.numeroPizzas = pedido.pizza.numeroPizzas; // Restaurar el número de pizzas
    this.pizza.ingredientes = [...pedido.pizza.ingredientes]; // Restaurar los ingredientes

    // Realizar el cálculo del subtotal actualizado
    const subtotal = this.calcularSubtotal();
    this.pedidos[this.editarPedidoIndex].subtotal = subtotal;
    this.totalVentas -= pedido.subtotal;
    this.totalVentas += subtotal;
  }
}
