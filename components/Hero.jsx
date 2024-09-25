import { Button } from '@/components/ui/button';
import bgImage from '@/assets/background.jpg';
import { FormattedMessage } from 'react-intl';

export default function Hero() {
  const handleButtonClick = () => {
    window.location.href = '#get-in-touch';
  };

  return (
    <section className="py-20 rounded-b-[30px] px-4 lg:rounded-b-[60px] lg:h-[88vh] h-[400px] h-auto flex justify-center items-center flex-col gap-2 px-4 sm:px-6 lg:px-8 text-center" style={{ backgroundImage: `url(${bgImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-3xl lg:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
        <FormattedMessage id="hero_title" />
      </h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-white px-5">
        <FormattedMessage id="hero_description" />
      </p>
      <Button className="animate-bounce" onClick={handleButtonClick}>
        <FormattedMessage id="hero_button_text" />
      </Button>
    </section>
  );
}