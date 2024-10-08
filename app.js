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



// notification
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
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

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




let modal = document.querySelector('.modal')
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
                        <div class="title mt-1">Add a Bank Account</div>
                        <button class=" green-color close-modal bg-transfraent fs-xxl"><i
                                class="fa-solid fa-xmark"></i></button>
                    </div>

                    <!-- bank list -->
                        <div class="mt-4">
                            <label for="bank-list" class="blue-color fw-bold">Bank List</label>
                            <select class="input-control mt-1 border" name="" id="bank-list">
                                <option value="">Dutch Bangla</option>
                                <option value="">Sonali Bank</option>
                                <option value="">Islami Bank</option>
                                <option value="">UCB Bank</option>
                                <option value="">Rupali Bank</option>
                            </select>
                        </div>

                    <input type="text" class="input-control border mt-4" placeholder="Bank Account Number">

                        <!-- Branch list -->
                        <div class="mt-4">
                            <label class="blue-color fw-bold" for="brance-list">Branch List</label>
                            <select class="input-control mt-1 border" name="" id="brance-list">
                                <option value="">Bashabo Sub Branch</option>
                                <option value="">Babu Bazar Sub Branch</option>
                                <option value="">Kamrangirchor Sub Branch</option>
                                <option value="">Jatrabari Sub Branch</option>
                                <option value="">Nandipara Sub Branch</option>
                                <option value="">Bhashantek Sub Branch</option>
                            </select>
                        </div>

                        <input type="number" class="input-control border mt-4" placeholder="Routing Number">

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
        closeModal()

    })
}




const transferTakaBtn = document.getElementById('transfer-taka-btn');
if (transferTakaBtn) {

    transferTakaBtn.addEventListener('click', () => {
        modal.classList.add('active')
        const modalContent = document.querySelector('.modal .modal-content')



        // Add modal content
        modalContent.innerHTML = `
            <div class="flex-between">
                <div class="title mt-1">Enter your PIN</div>
                <button class="green-color close-modal bg-transparent fs-xxl"><i
                        class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="mt-3 flex-column gap-10">
                <input type="password" class="input-control border" placeholder="Enter PIN">
                <button class="btn fw-bold bg-green w-100"
                    onclick="window.location.href='./transfer-taka.html'">Confirm</button>
            </div>
        `;

        closeModal()
    });
}




// transfer taka next button
const transferTakaNext = document.getElementById('transfer-taka-next')
if (transferTakaNext) {

    const modalContent = document.querySelector('.modal .modal-content')
    modalContent.innerHTML = `
            <div class="flex-between input-search-area  gap-20 mt-4 px-2">
                <input class=" input-control" id="customer-id-input" type="text" placeholder="Enter Transfer Account">
                <button class="search-btn btn radius-sm"><i class="ri-search-2-line"></i></button>
            </div>

            <div class="profile-area"></div>

            <!-- Modal Footer -->
            <div class="modal-footer d-flex justify-end mt-4 gap-10">
                <button class="btn radius-md fw-bold bg-green close-modal"> Cancel</button>
                <button disabled class="btn radius-md disable fw-bold" id="disable-btn">Transfer</button>
            </div>
        `

    transferTakaNext.addEventListener('click', () => {
        const amountInput = document.querySelector('#transferAmount').value
        const noteInput = document.querySelector('#Description').value

        if (amountInput !== '' || noteInput !== '') {
            modal.classList.add('active')
        }
    })

    const inputField = document.getElementById('customer-id-input');
    const disableBtn = document.getElementById('disable-btn');
    const profileArea = document.querySelector('.profile-area');


    // Add an event listener to the input field to check for changes
    inputField.addEventListener('input', () => {
        const inputValue = inputField.value;
        if (inputValue.length >= 6) {
            disableBtn.removeAttribute('disabled');
            disableBtn.classList.remove('disable');
            disableBtn.classList.add('bg-blue');

            if (!profileArea.innerHTML) {  // Prevent multiple additions
                profileArea.innerHTML = `
                    <div class="profile d-flex justify-start align-center  gap-15">
                        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                            alt="" class="profile-img">
                        <div>
                            <div class="name sub-title">Md Tanvir Ahmed</div>
                            <div class="post blue-color fs-xs mt-n-1">General Manager</div>
                            <div class="sub-table green-color mt-1">ID: 2345</div>
                        </div>
                    </div>
                `;
            }

            disableBtn.addEventListener('click', () => {
                const notification = document.createElement('div')

                notification.innerHTML = `
                <div class=" flex-center gap-10">
                    <img class="width-50" src = "../image/checked.png" alt = ""> Successfully Transfer
                </div>
                `
                notification.classList.add('notification')
                document.querySelector('body').appendChild(notification)

                setTimeout(() => {
                    notification.classList.add('active');
                }, 10);
                setTimeout(() => {
                    notification.classList.remove('active');
                    document.querySelector('body').removeChild(notification);
                }, 3000);

            })
        } else {
            disableBtn.setAttribute('disabled', true);
            disableBtn.classList.add('disable');
            profileArea.innerHTML = ''
        }
    });
    closeModal()
}



// close modal
function closeModal() {
    const closeModalBtn = modal.querySelector('.close-modal');
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active')
    });
}