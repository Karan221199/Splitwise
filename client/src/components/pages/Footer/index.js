import footer from '../../assets/images/footer.svg';

const Footer = () => {
    return (
        <footer>
            <img src={footer} alt="footer image" style={{position:"relative",bottom:0}}/>
        </footer>
    );
}

export default Footer;