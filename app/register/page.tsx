"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import './register.css';

const ContactForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [emailHienLoi, setemail] = useState('');
    const [passwordHienLoi, setpassword] = useState('');
    const [rePasswordHienLoi, setrePassword] = useState('');
    const [error, setError] = useState('');

    const [formData, setFormData] = useState([{
        tk: '',
        mk: '',
        reMk: ''
    }]);

    const validateEmail = (email) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(email);
    };

    const handleEmailChange = (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
  
      if (!validateEmail(newEmail)) {
          setemail('Email không hợp lệ');
      } else {
          setemail('');
      }
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigateToLogin = (e) => {
        e.preventDefault();

        if (!email) {
          setemail('Vui lòng điền email đăng kí');
          return;
        }
        setemail('');

        if (!password) {
          setpassword('Vui lòng điền mật khẩu đăng kí');
          return;
        }
        setpassword('');

        if (!rePassword) {
          setrePassword('Vui lòng điền mật khẩu đăng kí');
          return;
        }
        setrePassword('');

        if (password !== rePassword) {
          setError('Mật khẩu không khớp');
          return;
        }
        // Reset lỗi sau khi xử lý thành công
        setError('');
        // Xử lý logic gửi form ở đây
        console.log(formData);
        //nếu mk và mk nhập lại khớp
        router.push('/');
    };

    return (
      <div className="">
          <form onSubmit={navigateToLogin}>
            <h1>Sign Up</h1>
            <input type="text" name="tk" value={email} placeholder="Email" onChange={handleEmailChange} />
            {emailHienLoi && <p style={{color: 'red'}}>{emailHienLoi}</p>}
            <input type="text" name="mk" value={password} placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value) } />
            {passwordHienLoi && <p style={{color: 'red'}}>{passwordHienLoi}</p>}
            <input type="text" name="reMk" value={rePassword} placeholder="Nhập lại mật khẩu" 
            onChange={(e) => setRePassword(e.target.value)} />
            {rePasswordHienLoi && <p style={{color: 'red'}}>{rePasswordHienLoi}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className='register' type="submit">Đăng kí</button>
          </form>
      </div>
    );
};

export default ContactForm;