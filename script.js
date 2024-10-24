document.getElementById('businessForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    // Lấy giá trị input
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;

    // Reset thông báo lỗi
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('addressError').textContent = '';
    document.getElementById('cityError').textContent = '';
    document.getElementById('zipError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    // Kiểm tra Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Email không đúng định dạng.';
        isValid = false;
    }

    // Kiểm tra Phone (chỉ số và có ít nhất 10 chữ số)
    const phoneRegex = /^[0-9]{10,}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Số điện thoại không hợp lệ.';
        isValid = false;
    }

    // Kiểm tra các trường thông tin khác không được bỏ trống
    if (address.trim() === '') {
        document.getElementById('addressError').textContent = 'Địa chỉ không được để trống.';
        isValid = false;
    }
    if (city.trim() === '') {
        document.getElementById('cityError').textContent = 'Thành phố không được để trống.';
        isValid = false;
    }
    if (zip.trim() === '') {
        document.getElementById('zipError').textContent = 'Mã Zip không được để trống.';
        isValid = false;
    }

    // Hiển thị thông báo nếu dữ liệu hợp lệ
    if (isValid) {
        document.getElementById('formSuccess').textContent = 'Thành công';
    }
});
