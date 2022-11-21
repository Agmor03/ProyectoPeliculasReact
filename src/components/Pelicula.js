import React from 'react';

class Pelicula extends React.Component {
    render() {
        return (
            <main>
                <div>
                    <img src={this.props.img}/>
                </div>
                <section>
                    <h2> {this.props.titulo} </h2>
                    <h4> {this.props.duracion}</h4>
                    <p> {this.props.descripcion}</p>
                    <h4> {this.props.reparto} </h4>
                    <h5> {this.props.puntuacion} </h5>
                </section>
            </main>
        );
    }
}
export default Pelicula;