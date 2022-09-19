/**
 * Componente que renderiza otros componentes.
 * Para poder utilizarlo se tiene que hacer:
 * 
 * <Children>AQUI COMPONENTE QUE QUEREMOS RENDERIZAR</Children>
 */

const Children = (props) => {
  return (
    <section className="component-children">
      <article>{props.children}</article>
      <article>
        <div>Este es mi usuario</div>
      </article>
    </section>
  );
};

export default Children;
