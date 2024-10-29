import React from 'react';
import './main.css'
import auto from './../../img/pngwing.com (4).png';
import services from './../../img/pngwing.com (3).png';
import rub from './../../img/Group 16.png';
import doc from './../../img/Group 17.png';
import bank from './../../img/Group 19.png';
import solaris from './../../img/solaris.png';
import rub1 from './../../img/Group 20.png';
import doc1 from './../../img/Group 21.png';
import bank1 from './../../img/Group 22.png';
import services2 from './../../img/pngwing.com (5).png'
import Drop from './Drop';
import MapWithMarker from '../Map/Contact';
function Main() {

    return (
        <section className='Main'>
            <div className="conteiner">
                <div className="first-content">
                    <div className="txt-content">
                        <h1>О НАС</h1>
                        <p>Добро пожаловать в Absolute Auto! Мы предлагаем широкий выбор новых и подержанных автомобилей высочайшего качества. Наша цель - обеспечить вас непревзойденным сервисом и помочь вам найти идеальное авто. Доверьте нам свои мечты о автомобиле, и мы сделаем все возможное, чтобы они стали реальностью.
                        </p>
                    </div>
                    <img src={auto} className="pic" alt="logo" />
                </div>
                <div className="second-content">
                    <h1 id='ysl'>УСЛУГИ</h1>
                    <img src={services} className="services" alt="logo" />
                    <div className="second-txt">
                        <Drop title="01 ВЫКУП -"
                            content="Нужны срочно деньги? Мы поможем. Максимально оперативно приедем и выкупим твой авто за наличные. Выезд в регионы - обсуждается." />
                        <Drop title="02 КОМИССИЯ -"
                            content="Комиссионная продажа любого транспортног средства" />
                        <Drop title="03 АВТОКРЕДИТ" />
                        <Drop title="04 ОФОРМЛЕНИЕ В ГАИ" />
                        <Drop title="05 ОПРАВКА В РЕГИОНЫ АВТО ПОД ЗАКАЗ" />
                        <Drop title="06 ТОРГИ ВЫХОДНОГО ДНЯ -"
                            content="Возможность оставить на выходные автомобиль с вашей ценой" />
                        <Drop title="07 ПРЕДЛОЖЕНИЯ ДЛЯ АВТОМОБИЛЕЙ ПО ФОРМУЛЕ: - "
                            content=" Один и  < 100 000, возможность бесплатного размещения ато на стоянке" />
                    </div>
                    <img src={services2} className="services2" alt="logo" />
                    <div id='credit' className="credit">
                        <h1>Автокредитование</h1>
                        <div className="credits-work">
                            <div className="credit-all">
                                <div className="credit-content">
                                    <img src={rub} className="rub" alt="rub" />
                                    <div className="credit-txt">
                                        <span>Без первого взноса</span>
                                    </div>
                                </div>
                            </div>
                            <div className="credit-all1">
                                <div className="credit-content">
                                    <img src={doc} className="rub" alt="rub" />
                                    <div className="credit-txt">
                                        <span>По 2-м документам</span>
                                    </div>
                                </div>
                            </div>
                            <div className="credit-all1">
                                <div className="credit-content">
                                    <img src={bank} className="bank" alt="rub" />
                                    <div className="credit-txt">
                                        <span>Банк партнер</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="credits-work2">
                            <div className="credit-all2">
                                <div className="credit-content1">
                                    <img src={rub1} className="rub1" alt="rub" />
                                    <div className="credit-txt1">
                                        <span>Без первого взноса</span>
                                    </div>
                                </div>
                            </div>
                            <div className="credit-all3">
                                <div className="credit-content1">
                                    <img src={doc1} className="rub1" alt="rub" />
                                    <div className="credit-txt2">
                                        <span>По 2-м документам</span>
                                    </div>
                                </div>
                            </div>
                            <div className="credit-all4">
                                <div className="credit-content1">
                                    <img src={bank1} className="bank1" alt="rub" />
                                    <div className="credit-txt1">
                                        <span>Банк партнер</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="credit-ysl">
                            <img src={solaris} className="solaris" alt="rub" />
                            <div className="ysl-txt">
                                <p>Мы возьмем на себя подбор оптимальной кредитной программы и оформление сопутствующих документов. Вам остается лишь выбрать подходящий автомобиль и заполнить кредитную заявку для предварительного одобрения.
                                    После звонка кредитного эксперта приезжайте в автоцентр, пробуйте понравившийся автомобиль в рамках бесплатного тест-драйва и оформляйте автокредит прямо в салоне без необходимости обращения в отделение банка-партнера.</p>
                            </div>
                        </div>
                    </div>
                    <div id='con' className="thrid-content">
                        <h1>КОНТАКТНАЯ ИНФОРМАЦИЯ:</h1>
                        <MapWithMarker></MapWithMarker>
                        <div className="contact">
                            <h1>Номер для связи:</h1>
                            <p>8-913-651-50-73</p>
                            <h1>Адрес:</h1>
                            <p>Жукова 65/1</p>
                            <h1>Ссылка на телеграм:</h1>
                            <p><a href='https://t.me/automarshall'>АвтоМаршл</a></p>

                        </div>
                    </div>
                </div>
                <div className="map"></div>
            </div>
        </section>
    )
}

export default Main;