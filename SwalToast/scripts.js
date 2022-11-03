function toast(title, message = '', icon = 'success', timer = '2500', position = 'top-end') {
  
  const Toast = Swal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: timer,
    showClass: {
            popup: 'animate__animated animate__fadeInRight'
        },
    hideClass: {
        popup: 'animate__animated animate__fadeOutRight'
    },
    width: 450,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
    customClass: {
        timerProgressBar: icon == 'success' ? 'green' : 'red' 
    }
  })
  
    Toast.fire({
      icon: icon,
      title: title,
      text: message
  });
}



document.querySelector('#btnSuccess').addEventListener('click', () => toast('Guardado', 'El registro X se ha guardado correctamente'));
document.querySelector('#btnError').addEventListener('click', () => toast('Opss...', 'Algo salió mal', 'error'))
document.querySelector('#btnCustom').addEventListener('click', function () {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        //confirmButtonColor: '#3085d6',
        //cancelButtonColor: '#d33',
        cancelButtonText: '<i class="fa-regular fa-circle-xmark fa-lg"></i>  Cancel',
        confirmButtonText: '<i class="fa-regular fa-circle-check fa-lg"></i> Delete it!',
        customClass: {
            confirmButton: 'btnSuccess',
            cancelButton: 'btnClose',
            timerProgressBar: 'green'
        },
        allowOutsideClick: false,
        //buttonsStyling: false,
        reverseButtons: true,
        focusConfirm: false,
        timer: 5000,
        timerProgressBar: true,
    }).then((result) => {
        if (result.isConfirmed) {
            toast('Deleted!', 'Your file has been deleted.')
        }
    })
})

// customClass: {
//   container: '...',
//   popup: '...',
//   header: '...',
//   title: '...',
//   closeButton: '...',
//   icon: '...',
//   image: '...',
//   htmlContainer: '...',
//   input: '...',
//   inputLabel: '...',
//   validationMessage: '...',
//   actions: '...',
//   confirmButton: '...',
//   denyButton: '...',
//   cancelButton: '...',
//   loader: '...',
//   footer: '....',
//   timerProgressBar: '....',
// }


// document.querySelector('#btnError').addEventListener('click', function () {
//     //toast('Hola');
   
//     Swal.fire({
//         toast: true,
//         //icon: 'error', //success
//         title: 'Oops...',
//         text: 'Something went wrong!',
//         //footer: '<a href="">Why do I have this issue?</a>',
//         timer: 2000,
//         position: 'top-end',
//         icon: 'success',
//         title: 'Your work has been saved',
//         showConfirmButton: false,
//         showClass: {
//             popup: 'animate__animated animate__fadeInRight'
//         },
//         hideClass: {
//             popup: 'animate__animated animate__fadeOutRight'
//         }
        
//     })
// });