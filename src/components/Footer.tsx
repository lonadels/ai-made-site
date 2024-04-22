import React from 'react';
import FooterCard from './FooterCard';
import { ReactComponent as SettingsIcon } from '../assets/settings.svg';
import { ReactComponent as PercentIcon } from '../assets/percent.svg';
import { ReactComponent as CommentDotsIcon } from '../assets/comment-dots.svg';
import { ReactComponent as HeartIcon } from '../assets/heart.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer-cards">
                <FooterCard icon={SettingsIcon} title="только практика" description="Все уроки только на практическом опыте" />
                <FooterCard icon={PercentIcon} title="экономия до 40%" description="Ты экономишь деньги на то, что тебе нужно" />
                <FooterCard icon={CommentDotsIcon} title="удобное общение" description="Вы разбираете с преподавателем каждому" />
                <FooterCard icon={HeartIcon} title="поддержка" description="С вами всегда будут люди, которые помогут" />

            </div>
        </footer>
    );
};

export default Footer;
