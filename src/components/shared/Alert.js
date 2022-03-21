import Swal from 'sweetalert2';

export default function Alert({ success }) {
  if (success) {
    return Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'We will contact you soon',
      footer: '<a href="/">Buy me a coffee.</a>'
    });
  }
  return <div>Alert</div>;
}
