import { useState } from "react";
import SlickModule from "react-slick";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import "./index.scss";

const Slider = SlickModule.default ?? SlickModule;

ReactModal.setAppElement("#root");

const testimonials = [
  {
    name: "Joana",
    instrument: "Flute",
    text: "I’m an immigrant from another country, and after a long break from playing the flute, I decided to start playing again. At first, I practised on my own at home using YouTube, but I soon realised that I was missing the inspiration, motivation and, most importantly, the joy of making music together with other people. Then I found Kaleidoscope Orchestra, and that changed a lot for me. I was made to feel very welcome from the beginning. Our conductor also kindly paired me with a more experienced flute player who helped me with counting the bars so that I wouldn’t get lost and could keep up with everyone else. Whenever I didn’t understand an instruction, he would explain it to me patiently. Thanks to this support and encouragement, I gradually became more confident and my playing improved. I also got involved in some additional flute-focused and mixed groups, including Mosaic Sounds, which has given me even more opportunities to play and learn. A few times a year, we also have concerts for larger audiences, both indoors and outdoors. These performances are a great opportunity to experience the excitement of playing together as a group and to share the music we have been working on with the wider community. Thanks to the care and support of our conductor and the other musicians, I now play much better than I ever did when I was practising entirely on my own. For me, Kaleidoscope is not just about improving as a musician — it’s also about being part of a welcoming community, making music together, building confidence and having fun along the way.",
  },
  {
    name: "Peter",
    instrument: "Violin",
    text: "I first joined Kaleidoscope in April 2026 and immediately felt very welcomed. Having recently moved to the area, I was looking for a new orchestra to join, and I’m so glad I found Kaleidoscope. It’s a friendly, non-competitive group, which I really admire. We also have a wonderful conductor who organises an enjoyable and varied selection of music for us to play. If you’re looking for a supportive and friendly orchestra, I couldn’t recommend Kaleidoscope enough!",
  },
  {
    name: "Gary",
    instrument: "Clarinet",
    text: "Some time ago, I dusted off the clarinet that had been lying unused under my bed for more than 20 years and, slightly apprehensively, went along to my first rehearsal with Kaleidoscope... and haven't once regretted it! Kaleidoscope offers a unique opportunity for people of any age or ability to come together and make music in a completely supportive, non-judgemental environment. We are led by professional musicians who possess an unlimited supply of patience and a fantastic sense of humour. There are no auditions and no pressure—the only expectation is that you try your best and practice a little when you can. Somehow, that is enough. Guided by the incredible enthusiasm and belief of our musical directors, we always manage to produce real music that is an absolute pleasure to play... and even to listen to!",
  },
  {
    name: "Kate",
    instrument: "Oboe",
    text: "Friendly, and forgiving! Kaleidoscope is a great adult amateur orchestra. I restarted after years of not playing and the orchestra has been an excellent way to improve my playing.",
  },
  {
    name: "Sheila",
    instrument: "Recorder",
    text: "I play the recorder so to have the opportunity to play it in an orchestra and not just a recorder group is very special. It’s very uplifting.",
  },
  {
    name: "Annyes",
    instrument: "Flute & Cello",
    text: "What I treasure most about this orchestra is how open and friendly it is. You’re greeted with smiles, patience, and real encouragement, even if you haven’t picked up your instrument in ages. There’s no pressure, just a sense of belonging. It’s a group where you can reconnect with music and enjoy playing together.",
  },
  {
    name: "Julia",
    instrument: "Violin",
    text: "Wonderful bunch of people - kind and supportive as well as excellent musicians. It’s the perfect environment to enjoy music. I'd encourage anyone who’s recently started an instrument or thinking of picking theirs up again, to join.",
  },
  {
    name: "Bridget",
    instrument: "Violin",
    text: "I returned to playing the violin about 7 yrs ago after a very long gap. I had some lessons to help and my teacher suggested joining an orchestra. I found Kaleidoscope very welcoming and played with the strings and then orchestra. Although I thought several times I should stop as I struggled with some of the music and made many mistakes I was encouraged to stay and told that everyone makes mistakes and do what you can. I love being part of a group making music, and Julie is a great conductor with just the right balance of correcting and encouraging to push us to do better.",
  },
  {
    name: "Brian",
    instrument: "Cello",
    text: "I didn’t start playing the cello until I retired and although I loved the idea of playing in an orchestra, I never thought I would achieve the grades necessary to join one. My teacher then recommended Kaleidoscope and I have never looked back. I started in a small mixed group and then joined the strings and orchestra in 2014. Even now after all those years I sometimes still find it hard to believe that I am part of a real orchestra. As anyone who has ever learned to play an instrument will know, practicing for hours at home on your own can be pretty tough, especially for an instrument like the cello where most of the time you are playing an accompaniment, not the tune. Being in an orchestra has improved my playing far more than playing alone ever could. When I sit amongst my fellow cello players, who are all much better than I am, it lifts my own playing onto another level, because playing music is more than just hitting the right notes; it is all those subtle things like timing, dynamics and playing in sympathy with the rest of the orchestra that makes a piece of music come alive. Julie, our wonderful conductor, is brilliant at bringing out the best in every player, whatever their level, and it’s the determination not to let her down that makes playing with Kaleidoscope such a wonderful experience. It really does feel like being part of a large, happy family.",
  },
];

function TestimonialCard({ testimonial, onReadMore }) {
  const isLong = testimonial.text.length > 180;

  return (
    <article className="testimonial-card">
      <span className="testimonial-card__quote-mark" aria-hidden="true">
        “
      </span>

      <div className="testimonial-card__shape testimonial-card__shape--one" />
      <div className="testimonial-card__shape testimonial-card__shape--two" />

      <div className="testimonial-card__content">
        <p className="testimonial-card__text">
          {isLong
            ? `${testimonial.text.slice(0, 180).trimEnd()}…`
            : testimonial.text}
        </p>

        {isLong && (
          <button
            type="button"
            className="testimonial-card__read-more"
            onClick={onReadMore}
          >
            Read more <span aria-hidden="true">→</span>
          </button>
        )}
      </div>

      <div className="testimonial-card__author">
        <span className="testimonial-card__author-accent" />
        <div>
          <h3>
            {testimonial.name} – {testimonial.instrument}
          </h3>
          <p>Kaleidoscope musician</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: false,
    prevArrow: (
      <button
        type="button"
        className="testimonial-arrow testimonial-arrow--prev"
        aria-label="Previous testimonials"
      >
        ←
      </button>
    ),
    nextArrow: (
      <button
        type="button"
        className="testimonial-arrow testimonial-arrow--next"
        aria-label="Next testimonials"
      >
        →
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="testimonials" aria-labelledby="testimonials-heading">
        <div className="testimonials__diamond testimonials__diamond--pink" />
        <div className="testimonials__diamond testimonials__diamond--teal" />
        <div className="testimonials__diamond testimonials__diamond--yellow" />
        <div className="testimonials__diamond testimonials__diamond--violet" />
        <div className="testimonials__diamond testimonials__diamond--blue" />

        <div className="testimonials__inner">
          <header className="header">
            <p className="eyebrow">
              <span /> The community
            </p>

            <h2 id="testimonials-heading">
              What Our <span>Musicians Say</span>
            </h2>

            <p className="testimonials__intro">
              Every musician has a story. Here are a few from our musical
              family.
            </p>
          </header>

          <div className="testimonials__carousel">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.name}>
                  <TestimonialCard
                    testimonial={testimonial}
                    onReadMore={() => setActiveTestimonial(testimonial)}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <p className="testimonials__footer">
            Your next musical chapter could start here.
          </p>
        </div>
      </section>

      <ReactModal
        isOpen={Boolean(activeTestimonial)}
        onRequestClose={() => setActiveTestimonial(null)}
        contentLabel={
          activeTestimonial
            ? `Testimonial from ${activeTestimonial.name}`
            : "Musician testimonial"
        }
        className="testimonial-modal"
        overlayClassName="testimonial-modal-overlay"
      >
        {activeTestimonial && (
          <>
            <button
              type="button"
              className="testimonial-modal__close"
              onClick={() => setActiveTestimonial(null)}
              aria-label="Close testimonial"
            >
              <FontAwesomeIcon icon={faClose} />
            </button>

            <div className="testimonial-modal__decoration" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <p className="testimonial-modal__eyebrow">A Kaleidoscope story</p>

            <span className="testimonial-modal__quote-mark" aria-hidden="true">
              “
            </span>

            <h2>
              {activeTestimonial.name}
              <span> – {activeTestimonial.instrument}</span>
            </h2>

            <p className="testimonial-modal__text">{activeTestimonial.text}</p>

            <div className="testimonial-modal__signature">
              <span />
              <p>Kaleidoscope Musician</p>
            </div>
          </>
        )}
      </ReactModal>
    </>
  );
}
