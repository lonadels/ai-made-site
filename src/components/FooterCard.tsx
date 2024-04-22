interface FooterCardProps {
    icon: any;
    title: string;
    description: string;
}

const FooterCard = ({ icon: Icon, title, description }: FooterCardProps) => {
    return (
        <div className="footer-card">
            <div className="footer-card-icon">
                <Icon /> {/* Используем компонент иконки */}
            </div>

            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FooterCard;
