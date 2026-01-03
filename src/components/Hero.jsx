import { useState, useEffect, useRef } from 'react';

function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const textArray = useRef(['Design', 'Code', 'Create', 'Innovate', 'Build']);
  
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.current.length;
      const fullText = textArray.current[i];
      
      setCurrentText(isDeleting 
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 75 : 150);
      
      if (!isDeleting && currentText === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-background-overlay"></div>
        <div className="hero-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-container">
          <h6 className="hero-subtitle">Hello, I'm Rudra</h6>
          <h1 className="hero-title">
            A Developer Who Can 
            <span className="typing-text">
              {currentText}
              <span className="cursor">|</span>
            </span>
          </h1>
        </div>

        <p className="hero-description">
          I'm a passionate full-stack developer who crafts beautiful, functional 
          websites and applications with modern technologies and creative solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <i className="fas fa-code"></i> View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            <i className="fas fa-envelope"></i> Say Hello
          </a>
        </div>
        
        
      </div>
      <div className="hero-scroll-indicator">
          <a href="#about" className="scroll-down">
            <span>Scroll Down</span>
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
    </section>
  );
}

export default Hero;