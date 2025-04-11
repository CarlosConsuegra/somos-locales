import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      {/* Navigation/Header */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '16px 24px',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }}>
        <div style={{ color: '#FFD600', fontWeight: 'bold', fontSize: '24px' }}>SL</div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>Nosotros</Link>
          <Link to="/login" style={{ 
            padding: '8px 16px', 
            backgroundColor: '#FFD600', 
            color: 'black', 
            textDecoration: 'none', 
            borderRadius: '4px',
            fontWeight: 'bold'
          }}>
            Inicia sesión
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ 
        backgroundImage: "url('/assets/Principal_Section.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between',
          width: '100%',
          zIndex: 1
        }}>
          {/* Left content */}
          <div style={{ maxWidth: '500px', color: 'white' }}>
            <h1 style={{ fontSize: '36px', marginBottom: '16px' }}>Somos Locales</h1>
            <p style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
              Somos una plataforma deportiva que te ofrece una experiencia única y emocionante. 
              Participa en quinielas, reta a tus amigos y demuestra quién sabe más. 
              Encuentras horarios, boletos y los mejores tips para disfrutar del fútbol 
              femenil o masculino.
            </p>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#FFD600', marginBottom: '24px' }}>
              ¡Únete y vive la pasión!
            </p>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>#TIENESQUEVIVIRLO</div>
          </div>

          {/* Right content - Registration form */}
          <div style={{ 
            maxWidth: '380px', 
            backgroundColor: 'white', 
            padding: '24px', 
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{ textAlign: 'center', fontSize: '20px', marginBottom: '4px', color: '#333' }}>Regístrate</h2>
            <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '16px', color: '#666' }}>
              ¡Sé parte de SomosLocales!
            </p>
            
            {/* Progress bar */}
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
            <p style={{ color: '#ec4899', fontSize: '14px', marginBottom: '16px' }}>Paso 1/3</p>
            
            {/* Registration form */}
            <form>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', marginBottom: '4px', color: '#333' }}>
                  Nombre completo
                </label>
                <input 
                  type="text" 
                  placeholder="Escribe tu nombre completo"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '14px', marginBottom: '4px', color: '#333' }}>
                  Correo electrónico
                </label>
                <input 
                  type="email" 
                  placeholder="Escribe tu correo electrónico"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
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
                  cursor: 'pointer',
                  fontSize: '14px'
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
            
            <button 
              style={{
                width: '100%',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              <img src="/assets/social-icon.png" alt="Google" style={{ width: '18px', height: '18px' }} />
              Continuar con Google
            </button>
            
            <p style={{ textAlign: 'center', fontSize: '12px', marginTop: '16px' }}>
              ¿Ya tienes una cuenta? 
              <Link to="/login" style={{ color: '#ec4899', marginLeft: '5px' }}>
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ 
        padding: '60px 24px', 
        backgroundColor: '#262623',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {/* Feature 1 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ margin: '0 auto 16px', width: '80px', height: '80px' }}>
                <img src="/assets/layout-241.png" alt="Guías de estadios" style={{ width: '100%' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Guías de estadios</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.5 }}>
                Encuentra información de cada estadio, cómo llegar, donde comer, hospedarte y eventos previos.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ margin: '0 auto 16px', width: '80px', height: '80px' }}>
                <img src="/assets/app-screen-shot.png" alt="Quiniela" style={{ width: '100%' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Quiniela</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.5 }}>
                Reta a tus amigos en la quiniela y demuestra quién es el verdadero experto mientras disfrutas del futbol.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ margin: '0 auto 16px', width: '80px', height: '80px' }}>
                <img src="/assets/property-1-image-background-lummi.png" alt="Gana recompensas" style={{ width: '100%' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Gana recompensas</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.5 }}>
                Suma puntos, sube en el ranking y compite por increíbles premios mientras disfrutas del futbol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section style={{ 
        padding: '60px 24px', 
        backgroundColor: '#FFD600',
        color: '#262623'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>
            Conoce la plataforma
          </h2>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: 1.5, 
            textAlign: 'center', 
            maxWidth: '800px', 
            margin: '0 auto 40px' 
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Consectetur amet, lacus, amet, quis risus. Ullamcorper nulla risus, ac libero, libero amet, ligula. Risus!
          </p>
          
          {/* App screenshots slider */}
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/assets/app-screen-shot.png" 
                alt="App Screenshot" 
                style={{ 
                  maxWidth: '100%',
                  height: 'auto',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                  borderRadius: '16px'
                }} 
              />
            </div>
            
            {/* Navigation dots */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '8px' }}>
              <button style={{ 
                width: '10px', 
                height: '10px', 
                borderRadius: '50%', 
                backgroundColor: '#ec4899', 
                border: 'none',
                padding: 0,
                cursor: 'pointer'
              }}></button>
              <button style={{ 
                width: '10px', 
                height: '10px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                border: 'none',
                padding: 0,
                cursor: 'pointer'
              }}></button>
              <button style={{ 
                width: '10px', 
                height: '10px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                border: 'none',
                padding: 0,
                cursor: 'pointer'
              }}></button>
              <button style={{ 
                width: '10px', 
                height: '10px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                border: 'none',
                padding: 0,
                cursor: 'pointer'
              }}></button>
              <button style={{ 
                width: '10px', 
                height: '10px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                border: 'none',
                padding: 0,
                cursor: 'pointer'
              }}></button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ 
        padding: '60px 24px', 
        backgroundColor: '#FFD600',
        color: '#262623',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ maxWidth: '400px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
              El Corazón del Fútbol
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '24px' }}>
              La esencia de las gradas en tu hogar.
            </p>
            <button style={{ 
              background: 'none',
              border: '2px solid #262623',
              borderRadius: '4px',
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Conócenos +
            </button>
          </div>
          
          <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/assets/image-lummi-avatar.png" 
                alt="Karla H. Váldez" 
                style={{ 
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '12px'
                }} 
              />
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>
                Karla H. Váldez
              </h3>
              <p style={{ fontSize: '14px', color: '#555' }}>
                CEO & Fundadora
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/assets/image-lummi-avatar-2.png" 
                alt="Ana Paulina Sosa" 
                style={{ 
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '12px'
                }} 
              />
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>
                Ana Paulina Sosa
              </h3>
              <p style={{ fontSize: '14px', color: '#555' }}>
                CTO & Fundadora
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section style={{ 
        padding: '60px 24px', 
        backgroundImage: "url('/assets/frame-42731898.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1
        }}></div>
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px'
        }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', color: '#FFD600' }}>
              Únete a la comunidad
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.5 }}>
              Interactúa con otros aficionados, comparte tus experiencias en las tribunas, y únete a conversaciones emocionantes sobre el deporte que amamos.
            </p>
          </div>
          
          <div>
            <form>
              <input 
                type="email" 
                placeholder="Escribe tu correo electrónico"
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  marginBottom: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '14px'
                }}
              />
              <button 
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#FFD600',
                  color: '#262623',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Regístrame
              </button>
            </form>
            <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)', marginTop: '8px' }}>
              Al hacer clic en "Registrame", estoy de acuerdo con los Términos y condiciones.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#262623',
        color: 'white',
        padding: '60px 24px 24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px'
        }}>
          <div>
            <div style={{ marginBottom: '16px' }}>
              <img src="/assets/recurso-6-3-x-1.png" alt="Somos Locales" style={{ height: '40px' }} />
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <a href="#" style={{ 
                width: '32px', 
                height: '32px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '16px',
                textDecoration: 'none'
              }}>f</a>
              <a href="#" style={{ 
                width: '32px', 
                height: '32px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '16px',
                textDecoration: 'none'
              }}>t</a>
              <a href="#" style={{ 
                width: '32px', 
                height: '32px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '16px',
                textDecoration: 'none'
              }}>i</a>
              <a href="#" style={{ 
                width: '32px', 
                height: '32px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '16px',
                textDecoration: 'none'
              }}>y</a>
            </div>
          </div>
          
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#FFD600' }}>
              SomosLocales
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>
                  Acerca de Nosotros
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>
                  Oportunidades
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>
                  Noticias
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#FFD600' }}>
              Contenido
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>
                  Quiniela
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>
                  Rankings
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>
                  Funciones
                </a>
              </li>
            </ul>
            
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '24px 0 16px', color: '#FFD600' }}>
              Redes
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>
                  @SomosLocalesMX
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>
                  @SomosLocalesMX
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '60px', 
          fontSize: '12px', 
          color: 'rgba(255, 255, 255, 0.6)' 
        }}>
          All rights reserved 2024
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
