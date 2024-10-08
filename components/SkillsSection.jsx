import { FormattedMessage } from 'react-intl';
import { Button } from "./ui/button";

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "Javascript" },
  { name: "GIT" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "Express.js" },
];

export default function SkillsSection() {
  const handleButtonClick = () => {
    window.location.href = '#get-in-touch';
  };

  return (
    <section className="pt-16 pb-6 px-8" id="about">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <FormattedMessage id="about_title" />
      </h2>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="text-2xl pb-5 font-bold"><FormattedMessage id="know_me" /></div>

          <div className="leading-8"><FormattedMessage id="know_me_text" />
            <br /><br />
            <FormattedMessage id="know_me_text_last" />

            <div className="pt-6"><Button onClick={handleButtonClick}><FormattedMessage id="know_me_button" /></Button></div>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="text-2xl pb-5 font-bold"><FormattedMessage id="skills_title" /></div>

          <div className="flex flex-row gap-4 flex-wrap">
            {skills.map(item => (
              <div className="px-4 py-3 text-sm rounded-sm text-zinc-700 bg-gray-300 font-semibold">{item.name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}