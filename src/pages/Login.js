import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
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
          <h1 style={{ textAlign: 'center', marginBottom: '8px' }}>¡Bienvenido de vuelta!</h1>
          <p style={{ textAlign: 'center', marginBottom: '24px' }}>
            Inicia sesión para seguir disfrutando de la mejor experiencia.
          </p>
          
          <form>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px' }}>Correo electrónico</label>
              <input 
                type="email" 
                placeholder="Escribe tu correo electrónico"
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '4px' }}>Contraseña</label>
              <input 
                type="password" 
                placeholder="Escribe tu contraseña"
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
              Iniciar sesión
            </button>
          </form>
          
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <Link to="/" style={{ color: '#000', textDecoration: 'underline' }}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      
      <div style={{ 
        flex: 1, 
        backgroundColor: '#262623',
        backgroundImage: "url('/assets/iniciar_sesion_bg_right.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      </div>
    </div>
  );
}

export default LoginPage;
