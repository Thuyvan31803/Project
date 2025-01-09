"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import './login.css';

const ContactForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailHienLoi, setemail] = useState('');
    const [passwordHienLoi, setpassword] = useState('');
    const [error, setError] = useState('');

    //Xác thực tài khoản admin
    const defaultAdmin = {
        email: 'admin@gmail.com',
        password: 'adminpassword'
    };
    const handleLogin = () => {
        if (email === defaultAdmin.email && password === defaultAdmin.password) {
            router.push('/admin');
            setError('');
        } else{
            setError('Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại.');
        }
    }

    const [formData, setFormData] = useState({
        email: 'user1', 
        password: 'user2'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setemail('Vui lòng điền email đăng nhập');
            return;
        }
        setemail('');

        if (!password) {
            setpassword('Vui lòng điền mật khẩu đăng nhập');
        }
        setpassword('');

        // Logic kiểm tra tài khoản và mật khẩu đăng nhập
        setFormData({ email, password });
        const { email: formDataEmail, password: formDataPassword } = formData;

        if (formDataEmail.trim() === email.trim() && formDataPassword.trim() === password.trim()) {
            router.push('/customer');
            setError('');
        } else {
            setError('Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại.');
        } 
        console.log(formData);
    };

    //Quay về trang đăng kí
    const handleClick = () => {
        router.push('/register');
    };

    //Quên mật khẩu
    const handleConfirm = () => {
        router.push('/confirm');
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit} onClick={handleLogin}>
                <h1>Sign In</h1>
                <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                {emailHienLoi && <p style={{color: 'red'}}>{emailHienLoi}</p>}
                <input type="text" value={password} placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} />
                {passwordHienLoi && <p style={{color: 'red'}}>{passwordHienLoi}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button className='forgot' onClick={handleConfirm}>Quên mật khẩu</button>
                <button className='login' type="submit">Đăng nhập</button>
                Bạn chưa có tài khoản?<button className='return' onClick={handleClick}>Đăng ký ngay!</button>
            </form>
        </div>
    );
};

export default ContactForm;