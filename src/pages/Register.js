import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'Femenino',
    birthdate: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div>
            <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '4px' }}>Regístrate</h2>
            <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '16px' }}>
              ¡Sé parte de SomosLocales!
            </p>
            
            <div style={{ 
              height: '4px', 
              backgroundColor: '#e0e0e0', 
              borderRadius: '2px',
              position: 'relative',
              marginBottom: '8px'
            }}>
              <div style={{ 
                position: 'absolute',
                height: '100%',
                width: '33.33%',
                backgroundColor: '#ec4899',
                borderRadius: '2px'
              }}></div>
            </div>
            <p style={{ color: '#ec4899', fontSize: '14px', marginBottom: '24px' }}>Paso 1/3</p>
            
            <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>Nombre completo</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Escribe tu nombre completo"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>Correo electrónico</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Escribe tu correo electrónico"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>
              
              <button 
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#FFD600',
                  color: '#000',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Siguiente
              </button>
            </form>
            
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              margin: '16px 0',
              color: '#999',
              fontSize: '12px'
            }}>
              <span style={{ flex: 1, borderBottom: '1px solid #ddd' }}></span>
              <span style={{ padding: '0 10px' }}>o</span>
              <span style={{ flex: 1, borderBottom: '1px solid #ddd' }}></span>
            </div>
            
            <button style={{
              width: '100%',
              padding: '12px',
              backgroundColor: 'white',
              color: '#333',
              border: '1px solid #ddd',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}>
              <img src="/assets/social-icon.png" alt="Google" style={{ width: '18px', height: '18px' }} />
              Continuar con Google
            </button>
            
            <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '16px' }}>
              ¿Ya tienes una cuenta? <Link to="/login" style={{ color: '#666' }}>Inicia sesión</Link>
            </p>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '4px' }}>¡Crea una contraseña segura!</h2>
            <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '16px' }}>
              Usa al menos 8 caracteres, combinando letras, números y símbolos.
            </p>
            
            <div style={{ 
              height: '4px', 
              backgroundColor: '#e0e0e0', 
              borderRadius: '2px',
              position: 'relative',
              marginBottom: '8px'
            }}>
              <div style={{ 
                position: 'absolute',
                height: '100%',
                width: '66.66%',
                backgroundColor: '#ec4899',
                borderRadius: '2px'
              }}></div>
            </div>
            <p style={{ color: '#ec4899', fontSize: '14px', marginBottom: '24px' }}>Paso 2/3</p>
            
            <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>Contraseña</label>
                <input 
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Escribe una contraseña"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>Confirmar contraseña</label>
                <input 
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirma la contraseña"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>
              
              <button 
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#FFD600',
                  color: '#000',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Siguiente
              </button>
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '4px' }}>Queremos conocerte</h2>
            <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '16px' }}>
              Ayúdanos a saber más de ti
            </p>
            
            <div style={{ 
              height: '4px', 
              backgroundColor: '#e0e0e0', 
              borderRadius: '2px',
              position: 'relative',
              marginBottom: '8px'
            }}>
              <div style={{ 
                position: 'absolute',
                height: '100%',
                width: '100%',
                backgroundColor: '#ec4899',
                borderRadius: '2px'
              }}></div>
            </div>
            <p style={{ color: '#ec4899', fontSize: '14px', marginBottom: '24px' }}>Paso 3/3</p>
            
            <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px' }}>Sexo</label>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="Femenino" 
                      checked={formData.gender === 'Femenino'} 
                      onChange={handleChange}
                      style={{ marginRight: '8px' }}
                    />
                    Femenino
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="Masculino" 
                      checked={formData.gender === 'Masculino'} 
                      onChange={handleChange}
                      style={{ marginRight: '8px' }}
                    />
                    Masculino
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="No binario" 
                      checked={formData.gender === 'No binario'} 
                      onChange={handleChange}
                      style={{ marginRight: '8px' }}
                    />
                    No binario
                  </label>
                </div>
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>Fecha de nacimiento</label>
                <input 
                  type="text"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  placeholder="DD-MM-AA"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>Número celular</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <select 
                    style={{ 
                      padding: '12px', 
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      width: '80px'
                    }}
                  >
                    <option>MEX</option>
                    <option>USA</option>
                    <option>ESP</option>
                  </select>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(+52) 55-33-23-45-34"
                    style={{ 
                      flex: 1,
                      padding: '12px', 
                      border: '1px solid #ddd',
                      borderRadius: '4px'
                    }}
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#FFD600',
                  color: '#000',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Siguiente
              </button>
            </form>
          </div>
        );
      case 4:
        return (
          <div style={{ textAlign: 'center' }}>
            <img 
              src="/assets/woman_registration.svg" 
              alt="Success" 
              style={{ width: '120px', marginBottom: '24px' }}
            />
            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>¡Excelente!</h2>
            <p style={{ fontSize: '18px', fontWeight: '500', marginBottom: '32px' }}>
              Ya eres parte de Somos Locales
            </p>
            <p style={{ fontSize: '16px', marginBottom: '24px' }}>
              Te gustaría recibir notificaciones?
            </p>
            
            <button 
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#FFD600',
                color: '#000',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginBottom: '16px'
              }}
            >
              Permitir
            </button>
            
            <button 
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'transparent',
                color: '#666',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Tal vez después
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh',
      backgroundColor: '#262623'
    }}>
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '400px', width: '100%', padding: '32px' }}>
          {renderStep()}
        </div>
      </div>
      
      <div style={{ 
        flex: 1, 
        backgroundImage: "url('/assets/iniciar_sesion_bg_right.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      </div>
    </div>
  );
}

export default RegisterPage;
