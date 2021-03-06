import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'
import ParticlesComponent from './particles'
import TextBox from './textbox'
import TwoSpeakersTB from './twospeakerstb'
import MattTB from './matttb'
import SmallTextBox from './smalltextbox'

class Speakers extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSpeakerModal: false
    };
  }

  speakerModal = (speakerId) => {
    document.getElementById(speakerId).style.display = 'block';
  }

  closeModal = () => {
      let modals = document.querySelectorAll('.modal');

      for (let i = 0; i < modals.length; i++) {
          modals[i].style.display = 'none';
      }
  }

  render() {
    return (

      <div className='speakersPage'>

        <div id='speakers'>
          SPEAKERS
        </div>

        {window.matchMedia("(min-width: 769px)").matches &&
          <ParticlesComponent />
        }

        <div className='middleSpeaker'>
          <span className='middleHover' onClick={() => {this.speakerModal('tony-markovski')}}>

            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait bottom' src='./TonyC.jpg'/>
              <img className='portrait top' src='./TonyBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle'/>
            <TextBox title='Tony Markovski' text='Head of Innovation and Emerging Technology'/>
            <div className='keynoteText--middle'>
              <p className='keynoteTitle'>
                Opening
              </p>
              <p className='keynoteDescription'>
                You’re Innovating In All The Wrong Places
              </p>
            </div>
          </span>
        </div>

        <div className='speakerRow'>
          <span className='leftSpeakerBox' onClick={() => {this.speakerModal('bree-groff')}}>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--left' src='./BreeC.jpg' />
              <img className='portrait--left top' src='./BreeBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus'/>
            <MattTB firstname='Bree' lastname='Groff' text1='CEO of NOBL'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Keynote
              </p>
              <p className='keynoteDescription'>
                Underwear, Clocks, and Companies:  How to Change When You Must
              </p>
            </div>
          </span>

          <span className='rightSpeakerBox' onClick={() => {this.speakerModal('brett-hurt')}}>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--right' src='./BrettC.jpg' />
              <img className='portrait--right top' src='./BrettBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus'/>
            <MattTB firstname='Brett' lastname='Hurt' text1='CEO & Co-founder of data.world, Founder of Coremetrics and Bazaarvoice'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Keynote
              </p>
              <p className='keynoteDescription'>
                The Secrets of Making Profits With Purpose
              </p>
            </div>
          </span>
        </div>

        {/*<div className='middleSpeaker'>
          <span className='middleHover' onClick={() => {this.speakerModal('tamara-ingram')}}>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait' src='./TamaraC.jpg'/>
              <img className='portrait top' src='./TamaraBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle'/>
            <TextBox title='Tamara Ingram' text='CEO of J. Walter Thompson Worldwide'/>
            <div className='keynoteText--middle'>
              <p className='keynoteTitle'>
                Fireside Chat
              </p>
              <p className='keynoteDescription'>
                Innovating Like a Bull in a China Shop
              </p>
            </div>
          </span>
        </div>*/}

        <div className='middleSpeaker'>
          <span className='middleHover' onClick={() => {this.speakerModal('vivian-rosenthal')}}>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait' src='./VivianC.jpg'/>
              <img className='portrait top' src='./VivianBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle'/>
            <TextBox title='Vivian Rosenthal' text='Founder, Snaps'/>
            <div className='keynoteText--middle'>
              <p className='keynoteTitle'>
                Session
              </p>
              <p className='keynoteDescription--vivian'>
                It’s Personal:  How Chatbots, Voice & Messaging Change the Conversation
              </p>
            </div>
          </span>
        </div>

        {window.matchMedia("(min-width: 769px)").matches &&
          <ParticlesComponent />
        }

        <div className='speakerRow'>
          <span className='leftSpeakerBox' onClick={() => {this.speakerModal('emily-musil-church')}}>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--left' src='./EmilyC.jpg' />
              <img className='portrait--left top' src='./EmilyBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus'/>
            <MattTB firstname='Emily Musil' lastname='Church' text1='Director of Education and Impact' text2='XPRIZE Learning'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                Shooting for the Stars
              </p>
            </div>
          </span>

          <span className='rightSpeakerBox' onClick={() => {this.speakerModal('mark-lovett')}}>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--right' src='./MarkC.jpg' />
              <img className='portrait--right top' src='./MarkBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus'/>
            <MattTB firstname='Mark' lastname='Lovett' text1='Organizer, TEDX' text2='San Diego'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                Storylistening as an Agent of (R)Evolution
              </p>
            </div>
          </span>
        </div>

        <div className='middleSpeaker'>
          <span className='middleHover' onClick={() => {this.speakerModal('matt-webb')}}>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait' src='./MattC.jpg'/>
              <img className='portrait top' src='./MattBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle'/>
            <MattTB firstname='Matt' lastname='Webb' text1='Global CTO' text2='Mirum'/>
            <div className='keynoteText--middle'>
              <p className='keynoteTitle'>
                Workshop
              </p>
              <p className='keynoteDescription'>
                How to Build a Maker Business
              </p>
            </div>
          </span>
        </div>

        <div className='speakerRow'>
          <span className='leftSpeakerBox' onClick={() => {this.speakerModal('lucie-greene')}}>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--left' src='./LucieC.jpg' />
              <img className='portrait--left top' src='./LucieBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus'/>
            <TextBox title='Lucie Greene' text='Worldwide Director of J. Walter Thompson Intelligence'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                How to Be a Future-Focused Brand
              </p>
            </div>
          </span>

          <span className='rightSpeakerBox' onClick={() => {this.speakerModal('jamie-mclellan')}}>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--right' src='./JamieC.jpg' />
              <img className='portrait--right top' src='./JamieBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus'/>
            <TextBox title='Jamie McLellan' text='CTO of J. Walter Thompson Worldwide'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                Solving Human Problems With AI
              </p>
            </div>
          </span>
        </div>

        <div className='middleSpeaker'>
          <span className='middleHover' onClick={() => {this.speakerModal('acquiaspeakers')}}>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait-last' src='./AcquiaC.jpg'/>
              <img className='portrait-last top' src='./AcquiaBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--last'/>
            <TwoSpeakersTB title1='Lynne Capozzi' text1='CMO, Acquia' title2='Chris Stone' text2='CPO, Acquia'/>
            <div className='keynoteText--middle'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription--last'>
                The Right Stuff: What It Takes to Align Product and Marketing
              </p>
            </div>
          </span>
        </div>

        <div className='speakerRow'>
          <span className='leftSpeakerBox' onClick={() => {this.speakerModal('debra-cleaver')}}>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--left' src='./CleaverC.jpg' />
              <img className='portrait--left top' src='./CleaverBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus'/>
            <TextBox title='Debra Cleaver' text='Founder and CEO, Vote.org'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Session
              </p>
              <p className='keynoteDescription'>
              Innovating Democracy: Why It Should Be Everyone’s Purpose
              </p>
            </div>
          </span>

          <span className='rightSpeakerBox' onClick={() => {this.speakerModal('mark-newcomer')}}>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--right' src='./NewcomerC.jpg'/>
              <img className='portrait--right top' src='./NewcomerBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus'/>
            <TextBox title='Mark Newcomer' text='Chief Strategy Officer, Mirum'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Discussion
              </p>
              <p className='keynoteDescription'>
                Innovate Your Business: Insights, Tactics & Tales from the Trenches
              </p>
            </div>
          </span>
        </div>

        <div className='middleSpeaker'>
          <span className='middleHover' onClick={() => {this.speakerModal('afdhel-aziz')}}>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait' src='./AfdhelC.jpg'/>
              <img className='portrait top' src='./AfdhelBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle'/>
            <MattTB firstname='Afdhel' lastname='Aziz' text1='Founder and Chief Purpose Officer, Conspiracy of Love'/>
            <div className='keynoteText--middle'>
              <p className='keynoteTitle'>
                Session
              </p>
              <p className='keynoteDescription'>
                Beyond Advertising - Good Is The New Cool
              </p>
            </div>
          </span>
        </div>

          <div className="modal" id="tony-markovski">
              <div className="modal__inner">

                  <div className="modal-close" onClick={this.closeModal}>
                    <div className="closeModalBar1"></div>
                    <div className="closeModalBar2"></div>
                  </div>
                  <div className="speaker">
                      <img src="./TonyBW.jpg" />
                      <SmallTextBox title='Tony Markovski' text='Head of Innovation and Emerging Technology'/>
                  </div>
                  <div className="modal-columns">
                      <div className="modal_bio">
                          <p>Tony has 16 years of experience helping organizations plan, architect and deploy emerging technologies
                              and ideas that drive business transformation, innovation, experience development and leadership. He
                              has held leadership positions at Google, Adobe and Bazaarvoice, and is currently the Head of
                              Innovation & Emerging Technologies at Mirum Agency, which was named "Visionary" in the 2016 and
                              2017 Gartner Magic Quadrant. </p>
                      </div>
                      <div className="modal_talk">
                          <h2>Opening</h2>
                          <h3>You’re Innovating In All The Wrong Places</h3>
                          <p>Setting the tone for the day, Tony demonstrates how prioritizing “purpose” to future-proof your business determines how long
                          your company will live.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal" id="bree-groff">
              <div className="modal__inner">
                  <div className="modal-close" onClick={this.closeModal}>
                    <div className="closeModalBar1"></div>
                    <div className="closeModalBar2"></div>
                  </div>
                  <div className="speaker">
                      <img src="./BreeBW.jpg" />
                      <SmallTextBox title='Bree Groff' text='CEO of NOBL'/>
                  </div>
                  <div className="modal-columns">
                      <div className="modal_bio">
                          <p>Bree is a speaker and consultant, and serves as CEO of NOBL Collective. For more than a decade, she has been focused on organizational
                              design and innovation, advising leaders at companies including Calvin Klein, Intel, AARP, Capital
                              One and Memorial Sloan Kettering Cancer Center. She is recognized internationally for thought
                              leadership on designing organizations that support high-performing teams.</p>
                      </div>
                      <div className="modal_talk">
                          <h2>Keynote</h2>
                          <h3>Underwear, Clocks, and Companies:  How to Change When You Must</h3>
                          <p>Bree explains why those at the top of organizations must be instigators of change, and how to work through human responses
                          like resistance and vulnerability.  </p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal" id="brett-hurt">
              <div className="modal__inner">
                  <div className="modal-close" onClick={this.closeModal}>
                    <div className="closeModalBar1"></div>
                    <div className="closeModalBar2"></div>
                  </div>
                  <div className="speaker">
                      <img src="./BrettBW.jpg"/>
                      <SmallTextBox title='Brett Hurt' text='CEO & Co-founder of data.world, Founder of Coremetrics and Bazaarvoice'/>
                  </div>
                  <div className="modal-columns">
                      <div className="modal_bio">
                          <p>At data.world, Brett is building meaningful, collaborative and abundant data resources in the world. He founded
                              Coremetrics and Bazaarvoice before IBM’s acquisition. To support Austin’s entrepreneurs, Brett serves
                              as a Partner at Capital Factory and Mentor at Techstars Austin. He also serves as the Chairman of the
                              Board at Edgecase and serves on the Board of Conscious Capitalism.
                          </p>
                      </div>
                      <div className="modal_talk">
                          <h2>Keynote</h2>
                          <h3>The Secrets of Making Profits With Purpose</h3>
                          <p>Brett dives into the concept of Conscious Capitalism, providing personal insights from his experience creating billion-dollar purpose-led business models that better serve us all, including investors.</p>
                      </div>
                  </div>
              </div>
          </div>

          {/*<div className="modal" id="tamara-ingram">
              <div className="modal__inner">
                  <div className="modal-close" onClick={this.closeModal}>
                    <div className="closeModalBar1"></div>
                    <div className="closeModalBar2"></div>
                  </div>
                  <div className="speaker">
                      <img src="./TamaraBW.jpg"/>
                      <SmallTextBox title='Tamara Ingram' text='CEO of J. Walter Thompson Worldwide'/>
                  </div>
                  <div className="modal-columns">
                      <div className="modal_bio">
                          <p>Tamara joined J. Walter Thompson Company in 2016 as CEO where she oversees the agency’s global network. Previously at WPP,
                              Tamara oversaw the group’s 45 global account teams, which represented one-third of the Group’s
                              $20 billion revenue with over 38,000 employees. She has extensive experience leading innovative
                              advertising agencies, and has previously served as Grey UK’s Group CEO and global leader on their
                              Proctor & Gamble (P&G) account.</p>
                      </div>
                      <div className="modal_talk">
                          <h2>Fireside Chat</h2>
                          <h3>Innovating Like a Bull in a China Shop</h3>
                          <p>(Description coming soon.)</p>
                      </div>
                  </div>
              </div>
          </div>*/}

          <div className="modal" id="vivian-rosenthal">
              <div className="modal__inner">
                  <div className="modal-close" onClick={this.closeModal}>
                    <div className="closeModalBar1"></div>
                    <div className="closeModalBar2"></div>
                  </div>
                  <div className="speaker">
                      <img src="./VivianBW.jpg"/>
                      <SmallTextBox title='Vivian Rosenthal' text='Founder, Snaps'/>
                  </div>
                  <div className="modal-columns">
                      <div className="modal_bio">
                          <p>Vivian is the founder of Snaps, the innovative AI technology behind the largest chatbots, voice skills and social messaging apps for brands including Marriott, Nike Jordan, Ad Age and Vice. Named one of Creativity Magazine’s top 50 Global Creatives, she’s spoken at CaT London and TEDx, and has appeared on Good Morning America with Sheryl Sandberg to help promote women leaders and entrepreneurs.</p>
                      </div>
                      <div className="modal_talk">
                          <h2>Session</h2>
                          <h3>It’s Personal:  How Chatbots, Voice & Messaging Change the Conversation</h3>
                          <p>Snaps are at the forefront of the transformation in communications, allowing brands to have personal conversations at scale, leveraging Chatbot, Voice and Messaging technology. Viv explains how data underlies this ability to scale personalization, and provides tactical ideas about how your brand can make use of it and change customer conversations.
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal" id="emily-musil-church">
              <div className="modal__inner">
                  <div className="modal-close" onClick={this.closeModal}>
                    <div className="closeModalBar1"></div>
                    <div className="closeModalBar2"></div>
                  </div>
                  <div className="speaker">
                      <img src="./EmilyBW.jpg"/>
                      <SmallTextBox title='Emily Musil Church' text='Director of Education and Impact XPRIZE Learning'/>
                  </div>
                  <div className="modal-columns">
                      <div className="modal_bio">
                        <p>Dr. Emily Musil Church is a strategist and thought leader in harnessing technology to address global challenges for social good. Dr. Church directs the impact work for the Global Learning XPRIZE, where she bridges the worlds of research, innovation and global development. Prior to XPRIZE, Dr. Church spent over a decade in academia, where as a professor she specialized in African history, human rights and women’s global issues.</p>
                      </div>
                      <div className="modal_talk">
                          <h2>Talk</h2>
                          <h3>Shooting for the Stars</h3>
                          <p>What is incentivized competition and what is it capable of achieving? XPRIZE is impact driven and future looking, and Emily will share how to eliminate obstacles to change and energize human progress.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal" id="mark-lovett">
              <div className="modal__inner">
                  <div className="modal-close" onClick={this.closeModal}>
                    <div className="closeModalBar1"></div>
                    <div className="closeModalBar2"></div>
                  </div>
                  <div className="speaker">
                      <img src="./MarkBW.jpg"/>
                      <SmallTextBox title='Mark Lovett' text='Organizer, TEDX San Diego'/>
                  </div>
                  <div className="modal-columns">
                      <div className="modal_bio">
                         <p>Having survived three decades in corporate America, recovering executive Mark Lovett is now immersed in the world of storytelling, from organizing TEDx events in San Diego, on the U.S. & Mexico border, and in prisons, to professional speaker coaching and storytelling workshops at Fabricating the Truth.</p>

                      </div>
                      <div className="modal_talk">
                        <h2>Talk</h2>
                        <h3>Storylistening as an Agent of (R)Evolution</h3>
                        <p>Mark will explore how to humanize experience and create connection. When we remove the titles and clichés, the barriers and borders that divide us, we see that everyone has a story to share, and that being a part of others’ stories allows us to gain perspective. Leaders should not overlook the importance of listening to others and sharing stories as one of the most powerful agents of change.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal" id="matt-webb">
              <div className="modal__inner">
                <div className="modal-close" onClick={this.closeModal}>
                  <div className="closeModalBar1"></div>
                  <div className="closeModalBar2"></div>
                </div>
                  <div className="speaker">
                      <img src="./MattBW.jpg"/>
                      <SmallTextBox title='Matt Webb' text='Global CTO Mirum'/>
                  </div>
                  <div className="modal-columns">
                      <div className="modal_bio">
                          <p>Matt has over 18 years of web technology experience that extends across a range of areas, including web standards and best
                              practice, accessibility and human computer interfaces, enterprise content management systems,
                              system architecture, AR/VR, AI and anything to do with the future of web interfaces. He is passionate
                              about how technology relates to the customer experience.</p>
                      </div>
                      <div className="modal_talk">
                          <h2>Workshop</h2>
                          <h3>How to Build a Maker Business</h3>
                          <p>Matt explores what it really means to “make what’s next” and why the ability to hire and retain makers will be your business’s
                          competitive advantage today (and tomorrow). Matt also co-hosts the <em>Opus</em> innovation sprint.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal" id="lucie-greene">
              <div className="modal__inner">
                  <div className="modal-close" onClick={this.closeModal}>
                    <div className="closeModalBar1"></div>
                    <div className="closeModalBar2"></div>
                  </div>
                  <div className="speaker">
                      <img src="./LucieBW.jpg"/>
                      <SmallTextBox title='Lucie Greene' text='Worldwide Director of J. Walter Thompson Intelligence'/>
                  </div>
                  <div className="modal-columns">
                      <div className="modal_bio">
                          <p>At J. Walter Thompson, Lucie leads The Innovation Group’s ongoing research into emerging global consumer behaviors, cultural
                              changes and sector innovation with deep-dive studies and daily insights. She’s a thought leadership
                              columnist for Campaign, writes for the Financial Times and has spoken at conferences including
                              CES, SXSW, Web Summit and Adweek, discussing future trends across multiple lifestyle sectors.</p>
                      </div>
                      <div className="modal_talk">
                          <h2>Talk</h2>
                          <h3>How to Be a Future-Focused Brand</h3>
                          <p>Lucie guides us through current trends for future-proofing your business, dissecting some of the best examples in today’s
                          do-or-die climate.</p>
                      </div>
                  </div>
              </div>
          </div>


          <div className="modal" id="jamie-mclellan">
              <div className="modal__inner">
                  <div className="modal-close" onClick={this.closeModal}>
                    <div className="closeModalBar1"></div>
                    <div className="closeModalBar2"></div>
                  </div>
                  <div className="speaker">
                      <img src="./JamieBW.jpg"/>
                      <SmallTextBox title='Jamie McLellan' text='CTO of J. Walter Thompson Worldwide'/>
                  </div>
                  <div className="modal-columns">
                      <div className="modal_bio">
                          <p>Innovative technology that helps solve challenges, enable transformation and enhance experiences like artificial intelligence
                              (AI) are what motivate and excite Jamie. An architect by training, Jamie tries—sometime successfully—to
                              operate on the intersection of his left and right brains.</p>
                      </div>
                      <div className="modal_talk">
                          <h2>Talk</h2>
                          <h3>Solving Human Problems With AI</h3>
                          <p>Jamie explains why intelligence can never be artificial, and how our human ability to interpret context makes people, not
                          technology, the most important factor in achieving purpose-led innovation.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal two-speakers" id="acquiaspeakers">
              <div className="modal__inner">
                  <div className="modal-close" onClick={this.closeModal}>
                    <div className="closeModalBar1"></div>
                    <div className="closeModalBar2"></div>
                  </div>
                  <div className="speaker">
                      <img src="./AcquiaBW.jpg"/>
                      <SmallTextBox title='Lynne Capozzi & Chris Stone' text='CMO & CPO, Acquia'/>
                  </div>
                  <div className="modal-columns">
                      <div>
                          <div className="modal_bio">
                              <p>As Acquia’s CMO, Lynne oversees all global marketing functions, including corporate communications, content and events. In
                                  2011, Lynne left Acquia to pursue nonprofit work full-time, returning in 2016 to lead Acquia’s next stage of growth.
                                  She was previously CMO at JackBe, an enterprise mashup software company, and VP at Lotus Development, later acquired
                                  by IBM. Lynne is also on the board of directors at the Boston Children’s Hospital Trust and runs a nonprofit through
                                  the hospital.</p>
                          </div>
                      </div>
                      <div>
                          <div className="speaker-header">
                          </div>
                          <div className="modal_bio">
                              <p>Responsible for engineering, DevOps, product management and integrated digital experiences for the Acquia Platform, Chris
                                  has more than 30 years’ experience in enterprise software development and open source solutions. With Eric Schmidt, former
                                  CEO of Google and current Executive Chairman of Alphabet, Chris was part of Novell’s remarkable 1990s turnaround, and
                                  later served as vice-chairman and co-CEO. Chris earned a certificate in advanced office systems engineering from MIT.</p>
                          </div>
                      </div>
                      <div className="modal_talk">
                          <h2>Talk</h2>
                          <h3>The Right Stuff: What It Takes to Align Product and Marketing</h3>
                          <p>Acquia’s CMO and CTO throw down in a battle for product and market alignment, with the aim of achieving their mutual North Star: enhancing customer experience.</p>
                      </div>
                  </div>

              </div>
          </div>

          <div className="modal" id="debra-cleaver">
              <div className="modal__inner">
                  <div className="modal-close" onClick={this.closeModal}>
                    <div className="closeModalBar1"></div>
                    <div className="closeModalBar2"></div>
                  </div>
                  <div className="speaker">
                      <img src="./CleaverBW.jpg"/>
                      <SmallTextBox title='Debra Cleaver' text='Founder and CEO, Vote.org'/>
                  </div>
                  <div className="modal-columns">
                      <div className="modal_bio">
                          <p>Debra Cleaver has been working at the intersection of technology and democracy since 2004. She currently serves as the Founder and CEO of Vote.org, a nonpartisan, nonprofit organization that uses technology to simplify political engagement, increase voter turnout, and strengthen American democracy. Under Debra’s leadership, Vote.org won the prestigious Knight News Challenge in 2015, and was accepted into Y Combinator’s 2016 Summer Cohort.  Vote.org is widely recognized as the most cost-efficient, and innovative, voter turnout organization in America.  Over the past two years, Vote.org has registered almost one million voters and helped over 10 million voters cast ballots in national and local elections. Debra’s work has been featured in <a href='https://www.forbes.com/sites/moiravetter/2016/05/13/what-can-non-profit-startup-vote-org-do-with-y-combinator-seed-funding-in-178-days/#cd440431ba0d'>Forbes</a>, <a href='https://mic.com/articles/142646/there-s-a-new-way-to-register-to-vote-and-it-could-revolutionize-american-elections#.LrUoVfb2g'>Mic</a>, <a href='https://www.huffingtonpost.com/harry-red/how-this-solo-founder-got_b_10577370.html'>The Huffington Post</a>, and <a href='https://www.bustle.com/articles/159001-this-sparkling-new-voting-technology-couldnt-have-come-at-a-better-moment'>Bustle</a>.</p>
                      </div>
                      <div className="modal_talk">
                          <h2>Session</h2>
                          <h3>Innovating Democracy: Why It Should Be Everyone’s Purpose</h3>
                          <p>Imagine if we marketed democracy like a commercial brand? Debra challenges Opus attendees to turn up and play a role in innovating democracy, and highlights the unique opportunity brands have to drive purposeful change (and ROI) by encouraging people to get to the polls and vote. She’ll end the day with an intriguing challenge.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal" id="mark-newcomer">
              <div className="modal__inner">
                  <div className="modal-close" onClick={this.closeModal}>
                    <div className="closeModalBar1"></div>
                    <div className="closeModalBar2"></div>
                  </div>
                  <div className="speaker">
                      <img src="./NewcomerBW.jpg"/>
                      <SmallTextBox title='Mark Newcomer' text='Chief Strategy Officer, Mirum'/>
                  </div>
                  <div className="modal-columns">
                      <div className="modal_bio">
                          <p>As the Chief Strategy Officer of Mirum Agency, Mark leads Mirum’s Strategy & Planning, Insights, and Performance Media teams to transform client businesses. His approach is to work closely with organizations to collaborate, plan and execute large-scale digital efforts and improve marketing, sales, customer experience, product, and brand.</p>
                      </div>
                      <div className="modal_talk">
                          <h2>Discussion</h2>
                          <h3>Innovate Your Business: Insights, Tactics & Tales from the Trenches</h3>
                          <p>Mirum’s Chief Strategy Officer, Mark Newcomer, will host a candid discussion with industry leaders who share their personal perspectives and insights on how to transform and innovate your business from the inside out – insightful, practical, and direct advice you can apply to your own transformation journey.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal" id="afdhel-aziz">
              <div className="modal__inner">
                  <div className="modal-close" onClick={this.closeModal}>
                    <div className="closeModalBar1"></div>
                    <div className="closeModalBar2"></div>
                  </div>
                  <div className="speaker">
                      <img src="./AfdhelBW.jpg"/>
                      <SmallTextBox title='Afdhel Aziz' text='Founder and Chief Purpose Officer, Conspiracy of Love'/>
                  </div>
                  <div className="modal-columns">
                      <div className="modal_bio">
                          <p>Afdhel Aziz is Founder and Chief Creative Officer at Conspiracy of Love, a think-tank and idea incubator that helps Fortune 500 companies mix profits with purpose by harnessing the power of culture and technology. One of the world’s leading experts on brand purpose, he is co-author of the book Good is the New Cool: Market Like You Give a Damn, which explores how brands can attract loyal customers through a mission of ‘doing well by doing good’ and how to retain talent by helping employees find the meaningfulness in their work.</p>
                      </div>
                      <div className="modal_talk">
                          <h2>Talk</h2>
                          <h3>Beyond Advertising - Good Is The New Cool</h3>
                          <p>DAfdhel highlights that we are at a crossroads: either we can try to prop up the old, broken marketing model, or we can create a new model, one that is fit for the unique challenges of today. In his talk, <em>Beyond Advertising: Good Is the New Cool</em>, he challenges agencies to move beyond advertising and create products, services and experiences that consumers find ‘useful and delightful.’</p>
                      </div>
                  </div>
              </div>
          </div>

        <Parallax
          slowerScrollRate
        >
        </Parallax>
      </div>

    );
  }
}

export default Speakers;
