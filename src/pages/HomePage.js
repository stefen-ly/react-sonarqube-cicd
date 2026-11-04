
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faSeedling,
  faDroplet,
  faLeaf,
  faChartLine,
  faSun,
  faCheckCircle,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/homepageStyle.css";

const features = [
  {
    icon: faSeedling,
    title: "ការដាំដុះឆ្លាតវៃ",
    description:
      "ស្វែងយល់ពីបច្ចេកទេសដាំដុះទំនើប ដើម្បីឱ្យដំណាំលូតលាស់បានល្អ និងមានគុណភាពខ្ពស់។",
  },
  {
    icon: faDroplet,
    title: "ការគ្រប់គ្រងទឹក",
    description:
      "ប្រើប្រាស់ធនធានទឹកឱ្យមានប្រសិទ្ធភាព ដោយអនុវត្តវិធីសាស្ត្រស្រោចស្រពសមស្រប។",
  },
  {
    icon: faChartLine,
    title: "បង្កើនទិន្នផល",
    description:
      "រៀបចំផែនការកសិកម្ម កាត់បន្ថយការខ្ជះខ្ជាយ និងបង្កើនប្រសិទ្ធភាពផលិតកម្ម។",
  },
];

const benefits = [
  "លើកកម្ពស់គុណភាពដី និងសុខភាពដំណាំ",
  "កាត់បន្ថយការប្រើប្រាស់ធនធានខ្ជះខ្ជាយ",
  "ជួយរៀបចំផែនការដាំដុះប្រកបដោយប្រសិទ្ធភាព",
  "គាំទ្រការអភិវឌ្ឍកសិកម្មប្រកបដោយចីរភាព",
];

const HomePage = () => {
  return (
    <main className="earthdx-home">

      {/* Hero Section */}
      <section className="earthdx-hero">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="earthdx-hero-content">

                <span className="earthdx-label">
                  <FontAwesomeIcon icon={faLeaf} />
                  បច្ចេកវិទ្យាកសិកម្មសម្រាប់អនាគត
                </span>

                <h1 className="earthdx-hero-title">
                  សូមស្វាគមន៍មកកាន់
                  <span> EarthDX</span>
                  <br />
                  អនាគតនៃ
                  <span> កសិកម្មឆ្លាតវៃ</span>
                </h1>

                <p className="earthdx-hero-description">
                  យើងជឿជាក់ថា បច្ចេកវិទ្យាអាចជួយផ្លាស់ប្តូរ
                  វិស័យកសិកម្មឱ្យកាន់តែប្រសើរ។
                  EarthDX ផ្តោតលើការចែករំលែកចំណេះដឹង
                  និងដំណោះស្រាយទំនើប ដើម្បីជួយកសិករ
                  បង្កើនផលិតភាព និងអភិវឌ្ឍកសិកម្ម
                  ប្រកបដោយចីរភាព។
                </p>

                <div className="earthdx-hero-actions">
                  <a href="#features" className="earthdx-btn-primary">
                    ស្វែងយល់ពីសេវាកម្ម
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>

                  <a href="#about" className="earthdx-btn-outline">
                    អំពីពួកយើង
                  </a>
                </div>

                <div className="earthdx-hero-highlights">
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    បច្ចេកវិទ្យាទំនើប
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    កសិកម្មប្រកបដោយចីរភាព
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="earthdx-hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85"
                  alt="ទេសភាពវាលស្រែ និងកសិដ្ឋានបៃតង"
                  className="earthdx-hero-image"
                />

                <div className="earthdx-floating-card">
                  <span className="earthdx-floating-icon">
                    <FontAwesomeIcon icon={faSeedling} />
                  </span>
                  <div>
                    <strong>Smart Farming</strong>
                    <p>រួមគ្នាអភិវឌ្ឍកសិកម្ម</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="earthdx-section">
        <div className="container">

          <div className="earthdx-section-heading">
            <span className="earthdx-section-label">
              ដំណោះស្រាយរបស់យើង
            </span>

            <h2>
              ចាប់ផ្តើមកសិកម្មឆ្លាតវៃ
              <span> ជាមួយ EarthDX</span>
            </h2>

            <p>
              ស្វែងយល់ពីដំណោះស្រាយដែលជួយឱ្យ
              ការដាំដុះមានប្រសិទ្ធភាព និងសមស្រប
              ទៅនឹងតម្រូវការកសិកម្មសម័យថ្មី។
            </p>
          </div>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <article className="earthdx-feature-card">

                  <div className="earthdx-feature-icon">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <a href="#about" className="earthdx-feature-link">
                    ស្វែងយល់បន្ថែម
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>

                </article>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="earthdx-about">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="earthdx-about-image">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85"
                  alt="ការដាំដុះរុក្ខជាតិបៃតង"
                  loading="lazy"
                />
                <div className="earthdx-image-tag">
                  <FontAwesomeIcon icon={faLeaf} />
                  កសិកម្មបៃតង
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <span className="earthdx-section-label">
                អំពី EarthDX
              </span>

              <h2 className="earthdx-about-title">
                រួមគ្នាបង្កើត
                <span> អនាគតបៃតង</span>
                សម្រាប់គ្រប់គ្នា
              </h2>

              <p className="earthdx-about-description">
                EarthDX ជាគម្រោងដែលមានគោលបំណង
                លើកកម្ពស់ការយល់ដឹងអំពីកសិកម្មទំនើប
                និងការប្រើប្រាស់បច្ចេកវិទ្យាក្នុង
                ការគ្រប់គ្រងកសិដ្ឋាន។
              </p>

              <p className="earthdx-about-description">
                យើងផ្តោតលើការអភិវឌ្ឍប្រកបដោយចីរភាព
                ការអភិរក្សធនធានធម្មជាតិ និង
                ការបង្កើនប្រសិទ្ធភាពផលិតកម្មកសិកម្ម។
              </p>

              <div className="earthdx-benefit-list">
                {benefits.map((benefit, index) => (
                  <div className="earthdx-benefit-item" key={index}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <a href="#vision" className="earthdx-btn-primary">
                ស្វែងយល់ពីចក្ខុវិស័យ
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="earthdx-vision">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <span className="earthdx-section-label">
                ចក្ខុវិស័យរបស់យើង
              </span>

              <h2 className="earthdx-vision-title">
                បច្ចេកវិទ្យា
                <span> និងធម្មជាតិ</span>
                ដើរទៅមុខជាមួយគ្នា
              </h2>

              <p>
                យើងចង់ឃើញវិស័យកសិកម្មកម្ពុជា
                រីកចម្រើនតាមរយៈការប្រើប្រាស់
                បច្ចេកវិទ្យា ចំណេះដឹង និងការច្នៃប្រឌិត។
                កសិកម្មដែលមានប្រសិទ្ធភាព
                គឺជាមូលដ្ឋានសម្រាប់អនាគតប្រកបដោយចីរភាព។
              </p>

              <div className="earthdx-vision-points">
                <div>
                  <FontAwesomeIcon icon={faSun} />
                  <span>ការអភិវឌ្ឍប្រកបដោយចីរភាព</span>
                </div>

                <div>
                  <FontAwesomeIcon icon={faLightbulb} />
                  <span>ការច្នៃប្រឌិត និងចំណេះដឹងថ្មីៗ</span>
                </div>
              </div>

              <a href="#features" className="earthdx-btn-primary">
                ចាប់ផ្តើមស្វែងយល់
                <FontAwesomeIcon icon={faArrowRight} />
              </a>

            </div>

            <div className="col-lg-6">
              <div className="earthdx-vision-image">
                <img
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=85"
                  alt="សួនច្បារ និងដំណាំបៃតង"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="earthdx-cta">
        <div className="container">
          <div className="earthdx-cta-box">
            <FontAwesomeIcon icon={faSeedling} />

            <h2>តោះ! រួមគ្នាបង្កើតអនាគតកសិកម្ម</h2>

            <p>
              ចាប់ផ្តើមស្វែងយល់ពីបច្ចេកវិទ្យាថ្មីៗ
              និងដំណោះស្រាយសម្រាប់កសិកម្មឆ្លាតវៃជាមួយយើង។
            </p>

            <a href="#features" className="earthdx-btn-light">
              ស្វែងយល់ឥឡូវនេះ
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;
