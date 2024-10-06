// password show and hide
function showHidePassword(button) {
    const input = document.getElementById('password-input')
    const icon = button.querySelector('i')

    if (input.type === 'password') {
        input.type = 'text'
        icon.classList.remove('ri-eye-off-line');
        icon.classList.add('ri-eye-line');
    }
    else {
        input.type = 'password'
        icon.classList.remove('ri-eye-line');
        icon.classList.add('ri-eye-off-line');
    }
}




function errorTextClose() {
    const errorTag = document.querySelector('.error');
    const input = document.querySelector('#password-input')
    const loginBtn = document.querySelector('#login-btn')
    let countShow = document.querySelector('#count-text')
    const value = input.value;

    countShow.textContent = value.length;

    if (value.length >= 6) {
        errorTag.classList.add('active')
        loginBtn.classList.remove('disable')
        loginBtn.removeAttribute('disabled')
    }
    else {
        errorTag.classList.remove('active')
        loginBtn.classList.add('disable')
        loginBtn.setAttribute('disabled', true);
    }
}



function date() {
    const dateTag = document.querySelector('#date');

    if (dateTag) {
        const today = new Date();

        // Options for formatting the date
        const options = { day: 'numeric', month: 'long', year: 'numeric' };

        // Formatting the date in "20 January 2024" format
        const formattedDate = today.toLocaleDateString('en-GB', options);

        dateTag.innerText = formattedDate;
    }
}



window.onload = function () {
    const notification = document.querySelector('.notification')
    if (notification) {
        notification.classList.add('active')

        setTimeout(() => {
            notification.classList.remove('active')
        }, 2000)
    }

    date()
}








// show data table when user type input
function showDataTable() {
    const customerInput = document.getElementById('customer-id-input')

    if (customerInput) {
        const dataTable = document.getElementById('data-table')

        customerInput.addEventListener('input', function () {
            if (customerInput.value.trim() !== '') {
                dataTable.classList.add('active')
            }
            else {
                dataTable.classList.remove('active')
            }
        })
    }
}

// showDataTable()




function tabs() {
    const tabButtons = document.querySelectorAll('.tab-button');

    if (tabButtons) {
        const tables = document.querySelectorAll('.data-table');

        tabButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to the clicked button
                this.classList.add('active');

                // Get the target data from the clicked button's data-target attribute
                const targetData = this.getAttribute('data-target');

                // Hide all tables and show the corresponding table
                tables.forEach(table => {
                    table.classList.remove('active');
                    if (table.getAttribute('data-target') === targetData) {
                        table.classList.add('active'); // Show the corresponding table
                    }
                });
            });
        });
    }
}

tabs();






const ImageWrapper = document.querySelector('.image-wraper .flex-column');
if (ImageWrapper) {
    const imageBtns = ImageWrapper.querySelectorAll('.image');

    // ImageWrapper.addEventListener('click', () => {
    //     console.log('click')
    // })

    imageBtns.forEach(btn => {
        btn.addEventListener('focus', () => {
            modal.classList.add('active')
        });
    });
}




const modal = document.querySelector('.modal')
if (modal) {
    modal.addEventListener('click', () => {
        const modalContent = modal.querySelector('.modal-content');
        if (!modalContent.contains(event.target)) {
            modal.classList.remove('active')
        }
    })

    // search btn
    const searchBtn = document.getElementById('search-btn')
    if (searchBtn) {
        searchBtn.addEventListener('click', function () {
            modal.classList.add('active')
        })
    }
}


// Close modal button
const closeBtns = document.querySelectorAll('.modal .close-modal')
if (closeBtns) {
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('active')
        })
    })
}




const paymentMethod = document.querySelector('.payment-method');
if (paymentMethod) {
    const paymentMethodItems = paymentMethod.querySelectorAll('.single-payment'); // Use querySelectorAll

    paymentMethodItems.forEach(item => {
        item.addEventListener('click', function () {
            const checkbox = this.querySelector('input[type="checkbox"]'); // Get the checkbox inside the clicked item
            checkbox.checked = !checkbox.checked; // Toggle the checked state
            item.classList.toggle('active')
        });
    });
}




const addBankCart = document.getElementById('add-new-cart')
if (addBankCart) {
    addBankCart.addEventListener('click', () => {
        modal.classList.add('active')
        modal.innerHTML = `
                <div class="modal active">
                <!-- Modal Content -->
                <div class="modal-content">
                    <div class="flex-between">
                        <div class="title mt-1">Add a Payment Method</div>
                        <button class=" green-color close-modal bg-transfraent fs-xxl"><i
                                class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="mt-3 flex-column gap-10">
                        <input type="text" class="input-control border" placeholder="Card Number">
                        <div class="flex-between gap-15">
                            <input type="number" id="expDate" class="input-control border" placeholder="Exp Date">
                            <input type="number" class="input-control border" placeholder="CVC">
                        </div>
                        <input type="text" class="input-control border" placeholder="Card Holder Name">
                    </div>

                    <!-- Modal Footer -->
                    <div class="modal-footer d-flex justify-end mt-4 gap-10">
                        <button class="btn radius-md fw-bold bg-green close-modal"> Close</button>
                        <button class="btn radius-md fw-bold">Save</button>
                    </div>
                </div>
            </div>
        `
        // close modal
        const closeBtns = document.querySelectorAll('.modal .close-modal')
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.remove('active')
            })
        })
    })
}
const withdrawButton = document.getElementById('withdraw-btn')
if (withdrawButton) {
    withdrawButton.addEventListener('click', () => {
        modal.classList.add('active')
        modal.innerHTML = `
        <!-- Modal -->
            <div class="modal active">
                <div class="modal-content">
                    <div class="flex-between">
                        <div class="title mt-1">Add Amount</div>
                        <button class=" green-color close-modal bg-transfraent fs-xxl"><i
                                class="fa-solid fa-xmark"></i></button>
                    </div>

                    <div class="mt-3 flex-column gap-10">
                        <input type="number" class="input-control border" placeholder="Enter Amount">
                    </div>

                    <!-- Modal Footer -->
                    <div class="modal-footer d-flex justify-end mt-4 gap-10">
                        <button class="btn radius-md fw-bold bg-green close-modal"> Close</button>
                        <button class="btn radius-md fw-bold">Send</button>
                    </div>
                </div>
            </div>
        `

        // close modal
        const closeBtns = document.querySelectorAll('.modal .close-modal')
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.remove('active')
            })
        })

    })
}
