import React from 'react';
import FreeStartButton from './FreeStartButton';
import CreditCard from './CreditCard'; // Импортируем CreditCard
import "../styles/Hero.scss";
import Footer from './Footer';

const Hero = () => {
    return (
        <section>
            <div className="hero-content"> {/* Оборачиваем контент */}
                <h2>раскрой свой потенциал</h2>
                <h1>научись<br />
                    <span className="oval">
                        <span className="gradient-text">управлять</span>
                    </span><br />
                    деньгами
                </h1>
                <p>Бесплатный курс, который поможет тебе грамотно<br />распределить расходы и научит экономить</p>
                <FreeStartButton />
            </div>

            <CreditCard />
        </section>
    );
};

export default Hero;
