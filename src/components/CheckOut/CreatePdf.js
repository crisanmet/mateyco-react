import jsPDF from "jspdf";

export const CreatePdf = (order, id) => {
  const pdf = new jsPDF();

  pdf.text(`Fecha: ${order.date}`, 5, 40);
  pdf.text(`Comprador: ${order.nombre} ${order.apellido}`, 5, 10);
  pdf.text(
    `Compra:\n${order.cart.map(
      (p) =>
        `*Producto: ${
          p.name
        } / Precio (unidad): $${new Intl.NumberFormat().format(
          p.price
        )} / Cantidad: ${p.cantidad}\n`
    )}`,
    5,
    50
  );
  pdf.text(`Total: $${new Intl.NumberFormat().format(order.total)}`, 5, 20);

  pdf.save(`factura-${id}.pdf`);
};
