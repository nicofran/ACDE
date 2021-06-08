const Inscripcion = () => {
  return (
    <div className="inscripcion container">
      <p className="inscripcion__text">se requiere acreditación previa</p>
      <a
        href="https://forms.gle/7hCYrBq7DQ5wTqEq5"
        target="_blank"
        rel="noreferrer"
      >
        <button className="inscripcion__button">Inscribite</button>
      </a>
      <div className="inscripcion__hashtags">
        <span>#VamosAlEncuentro</span>
        <p>#EncuentroAnualACDE</p>
      </div>
    </div>
  );
};
export default Inscripcion;
