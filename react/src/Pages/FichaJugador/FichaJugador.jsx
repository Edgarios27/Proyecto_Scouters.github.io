import React from 'react'
import './FichaJugador.css'
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { BannerFicha } from '../../Components/Banner/BannerFicha';
import { RadarChart } from '../../Components/Metricas/RadarChart';

export function FichaJugador() {

    return (
        <>
            <div className='global-container'>
                <Header />
                <div className='interfaz-container'>
                    <BannerFicha />
                    {/* CONTAINER TUS INFORMES */}
                    <div className='main-info'>
                        <div className='tus-informes-container'>
                            <div className='tus-informes'>Tus Informes</div>
                            <div className='ficha-divider-horizontal'></div>
                            <div className='tus-informes-data'>
                                <p className='evaluacion-promedio'>Evaluación Promedio<br /><span>8</span></p>
                                <div className='ficha-divider-vertical'></div>
                                <p>Ultima Evaluación <br /><span>8</span></p>
                                <div className='ficha-divider-vertical'></div>
                                <p>Informes Recogidos <br /><span>07</span></p>
                                <div className='ficha-divider-vertical'></div>
                                <p>Próximo Seguimiento <br /><span>10/06/23</span></p>
                            </div>
                        </div>
                    </div>
                    {/*CONTAINER INFO  */}
                    <div className='new-main-info'>
                        <div className='new-tus-informes-container'>
                            <div className='new-tus-informes'>Info</div>
                            <div className='new-ficha-divider-horizontal'></div>
                            <div className='new-tus-informes-data'>
                                <p>Nacionalidad<br /><span>España</span></p>
                                <div className='new-ficha-divider-vertical'></div>
                                <p>Altura<br /><span>1.60m</span></p>
                                <div className='new-ficha-divider-vertical'></div>
                                <p>Peso<br /><span>57Kg</span></p>
                            </div>

                        </div>

                    </div>
                    {/* AQUÍ VA LA GRÁFICA  */}
                    {/* <RadarChart /> */}
                </div>
            </div>
            <Footer />
        </>

    )
}
