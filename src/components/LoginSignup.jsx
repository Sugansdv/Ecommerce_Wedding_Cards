import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const LoginSignup = () => {
  useEffect(() => {
    document.title = 'Login - Sign Up | WedKnotCraft';
  }, []);

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const navigate = useNavigate();

  const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];

  const handleLogin = (e) => {
    e.preventDefault();
    const users = getUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      setModalMessage(`Hello, ${user.name || 'User'}! Login Successful`);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate('/');
      }, 2000);
    } else {
      setError('Account does not exist or wrong credentials. Please sign up first.');
      setIsLogin(false);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const users = getUsers();
    const existing = users.find((u) => u.email === email);

    if (existing) {
      setError('Account already exists. Please login.');
      setIsLogin(true);
    } else if (password !== rePassword) {
      setError('Passwords do not match.');
    } else {
      const newUser = { name, email, password };
      const newUsers = [...users, newUser];
      localStorage.setItem('users', JSON.stringify(newUsers));

      setModalMessage('Registration Successful! Redirecting to login...');
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setIsLogin(true);
        setEmail('');
        setPassword('');
        setRePassword('');
        setName('');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#E6E6FA] flex flex-col items-center justify-center px-4 relative">
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-green-600 text-lg font-semibold">{modalMessage}</h2>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8 z-10">
        <div className="flex justify-between mb-6 border-b border-gray-300">
          <button
            onClick={() => {
              setIsLogin(true);
              setError('');
            }}
            className={`pb-2 text-lg cursor-pointer font-semibold ${isLogin ? 'border-b-2 border-black' : 'text-gray-500'}`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setIsLogin(false);
              setError('');
            }}
            className={`pb-2 text-lg cursor-pointer font-semibold ${!isLogin ? 'border-b-2 border-black' : 'text-gray-500'}`}
          >
            Sign Up
          </button>
        </div>

        {error && (
          <div className="text-red-600 text-sm mb-4 text-center font-medium">
            {error}
          </div>
        )}

        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <h3 className="text-lg font-medium">Login to my Account</h3>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i
                  className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} absolute top-2/4 right-3 -translate-y-1/2 cursor-pointer text-lg text-gray-500`}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#B83232] text-white cursor-pointer w-full py-2 rounded font-semibold hover:bg-[#a72929]"
            >
              Login & Continue
            </button>
            <div className="text-left text-sm mt-2 text-[#B83232] cursor-pointer hover:underline">
              Forgot Password
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-4">
            <h3 className="text-lg font-medium">New User? Sign up Now</h3>
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i
                  className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} absolute top-2/4 right-3 -translate-y-1/2 cursor-pointer text-lg text-gray-500`}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Re-Password</label>
              <div className="relative">
                <input
                  type={showRePassword ? 'text' : 'password'}
                  className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                  placeholder="Re-enter Password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  required
                />
                <i
                  className={`bi ${showRePassword ? 'bi-eye-slash' : 'bi-eye'} absolute top-2/4 right-3 -translate-y-1/2 cursor-pointer text-lg text-gray-500`}
                  onClick={() => setShowRePassword(!showRePassword)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#B83232] text-white cursor-pointer w-full py-2 rounded font-semibold hover:bg-[#a72929]"
            >
              Sign Up & Continue
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
