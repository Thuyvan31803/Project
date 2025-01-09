"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import './confirm.css';

const ForgotPasswordPage = () => {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');
    const [passwordHienLoi, setpassword] = useState('');
    const [rePasswordHienLoi, setrePassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!password) {
          setpassword('Vui lòng điền mật khẩu đặt lại');
          return;
        }
        setpassword('');
  
        if (!rePassword) {
          setrePassword('Vui lòng điền mật khẩu đặt lại');
          return;
        }
        setrePassword('');

        if (password !== rePassword) {
          setError('Mật khẩu không khớp');
          return;
        }
        router.push('/');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Đặt lại mật khẩu</h1>
                <input type="password" value={password} placeholder='Mật khẩu mới' 
                onChange={(e) => setPassword(e.target.value)} />
                {passwordHienLoi && <p style={{color: 'red'}}>{passwordHienLoi}</p>}
                <input type="rePassword" value={rePassword} placeholder='Nhập lại mật khẩu' 
                onChange={(e) => setRePassword(e.target.value)} />
                {rePasswordHienLoi && <p style={{color: 'red'}}>{rePasswordHienLoi}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className='confirm'>Xác nhận</button>
            </form>
        </div>
    );
};

export default ForgotPasswordPage;