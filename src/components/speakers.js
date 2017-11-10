import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax'
import ParticlesComponent from './particles'
import TextBox from './textbox'
import TwoSpeakersTB from './twospeakerstb'
import MattTB from './matttb'

class Speakers extends Component {
  constructor(props){
    super(props),
    this.state = {
      showSpeakerModal: false
    }
  }

  speakerModal = (speakerId) => {
    console.log('speakerModal function running');
    document.getElementById(speakerId).style.display = 'block'
  }

  render() {
    return (

      <div className='speakersPage'>

        <div id='speakers'>
          SPEAKERS
        </div>

        {window.matchMedia("(min-width: 700px)").matches &&
          <ParticlesComponent />
        }
        {this.state.showSpeakerModal &&
          <div>

          </div>
        }
        <div className='middleSpeaker'>
          <span>

            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait bottom' src='./TonyC.jpg'/>
              <img className='portrait top' src='./TonyBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle' onClick={this.speakerModal('tony-markovski')} />
            <TextBox title='Tony Markovski' text='Head of Innovation and Emerging Technology'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Opening
              </p>
              <p className='keynoteDescription'>
                You’re innovating in All The Wrong Places
              </p>
            </div>
          </span>
        </div>

        <div className='speakerRow'>
          <span className='leftSpeakerBox'>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--left' src='./BreeC.jpg' />
              <img className='portrait--left top' src='./BreeBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
            <MattTB firstname='Bree' lastname='Groff' text='CEO of NOBL'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Keynote
              </p>
              <p className='keynoteDescription'>
                Underwear, Clocks, and Companies: <br/> How to Change When You Must
              </p>
            </div>
          </span>

          <span className='rightSpeakerBox'>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--right' src='./BrettC.jpg' />
              <img className='portrait--right top' src='./BrettBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
            <MattTB firstname='Brett' lastname='Hurt' text='CEO & Co-founder of data.world, Founder of Coremetrics and Bazaarvoice'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Keynote
              </p>
              <p className='keynoteDescription'>
                The Secrets of Making Profits with Purpose
              </p>
            </div>
          </span>
        </div>

        <div className='middleSpeaker'>
          <span>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait' src='./TamaraC.jpg'/>
              <img className='portrait top' src='./TamaraBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle' />
            <TextBox title='Tamara Ingram' text='CEO of J. Walter Thompson Worldwide'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Fireside Chat
              </p>
              <p className='keynoteDescription'>
                Innovating Like a Bull in a China Shop
              </p>
            </div>
          </span>
        </div>

        {window.matchMedia("(min-width: 700px)").matches &&
          <ParticlesComponent />
        }

        <div className='speakerRow'>
          <span className='leftSpeakerBox'>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--left' src='./EmilyC.jpg' />
              <img className='portrait--left top' src='./EmilyBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
            <TextBox title='Emily Musil Church' text='Director of Education and Impact XPRIZE Learning'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                Shooting For The Stars
              </p>
            </div>
          </span>

          <span className='rightSpeakerBox'>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--right' src='./MarkC.jpg' />
              <img className='portrait--right top' src='./MarkBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
            <TextBox title='Mark Lovett' text='Organizer, TEDX San Diego'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                Storylistening as an Agent of (R)evolution
              </p>
            </div>
          </span>
        </div>

        <div className='middleSpeaker'>
          <span>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait' src='./MattC.jpg'/>
              <img className='portrait top' src='./MattBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle' />
            <MattTB firstname='Matt' lastname='Webb' text='Global CTO Mirum'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Workshop
              </p>
              <p className='keynoteDescription'>
                How to build a Maker Business
              </p>
            </div>
          </span>
        </div>

        <div className='speakerRow'>
          <span className='leftSpeakerBox'>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--left' src='./LucieC.jpg' />
              <img className='portrait--left top' src='./LucieBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
            <TextBox title='Lucie Greene' text='Worldwide Director of J. Walter Thompson Intelligence'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                How to be a Future-Focused Brand
              </p>
            </div>
          </span>

          <span className='rightSpeakerBox'>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait--right' src='./JamieC.jpg' />
              <img className='portrait--right top' src='./JamieBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus' />
            <TextBox title='Jamie McLellan' text='CTO of J. Walter Thompson Worldwide'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                Solving Human Problems with AI
              </p>
            </div>
          </span>
        </div>

        <div className='middleSpeaker'>
          <span>
            <Parallax
              offsetXMin={"0px"}
              offsetXMax={"-50px"}
            >
              <img className='portrait-last' src='./Acquia.jpg'/>
              <img className='portrait-last top' src='./AcquiaBW.jpg'/>
            </Parallax>
            <img src='./plus-sign.png' className='plus--middle2' />
            <TwoSpeakersTB title1='Lynne Capozzi' text1='CMO, Acquia' title2='Chris Stone' text2='CPO, Acquia'/>
            <div className='keynoteText'>
              <p className='keynoteTitle'>
                Talk
              </p>
              <p className='keynoteDescription'>
                The Right Stuff: What It Takes to Align Product and Marketing
              </p>
            </div>
          </span>
        </div>

          <div className="modal" id="tony-markovski">
              <div class="modal__inner">
                  <div class="modal-close"></div>
                  <div class="speaker">
                      <h2>Tony Markovski</h2>
                      <h3>Head of Innovation and Emerging Technologies at Mirum </h3>
                  </div>
                  <div class="modal-columns">
                      <div class="col bio">
                          <p>Tony has 16 years of experience helping organizations plan, architect and deploy emerging technologies
                              and ideas that drive business transformation, innovation, experience development and leadership. He
                              has held leadership positions at Google, Adobe and Bazaarvoice, and is currently the Head of
                              Innovation & Emerging Technologies at Mirum Agency, which was named "Visionary" in the 2016 and
                              2017 Gartner Magic Quadrant. </p>
                      </div>
                      <div class="col talk">
                          <h3>You’re Innovating in All the Wrong Places</h3>
                          <p>Setting the tone for the day, Tony demonstrates how prioritizing “purpose” to future-proof your business determines how long
                          your company will live.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal" id="matt-webb">
              <div class="modal__inner">
                  <div class="modal-close"></div>
                  <div class="speaker">
                      <h2>Matt Webb</h2>
                      <h3>Global CTO of Mirum</h3>
                  </div>
                  <div class="modal-columns">
                      <div class="col bio">
                          <p>Matt has over 18 years of web technology experience that extends across a range of areas, including web standards and best
                              practice, accessibility and human computer interfaces, enterprise content management systems,
                              system architecture, AR/VR, AI and anything to do with the future of web interfaces. He is passionate
                              about how technology relates to the customer experience.</p>
                      </div>
                      <div class="col talk">
                          <h3>How To Build A Maker Business</h3>
                          <p>Matt explores what it really means to “make what’s next” and why the ability to hire and retain makers will be your business’s
                          competitive advantage today (and tomorrow). Matt also co-hosts the <em>Opus</em> innovation sprint.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal" id="bree-groff">
              <div class="modal__inner">
                  <div class="modal-close"></div>
                  <div class="speaker">
                      <h2>Bree Groff</h2>
                      <h3>CEO of NOBL</h3>
                  </div>
                  <div class="modal-columns">
                      <div class="col bio">
                          <p>Bree is a speaker and consultant, and serves as CEO of NOBL Collective. For more than a decade, she has been focused on organizational
                              design and innovation, advising leaders at companies including Calvin Klein, Intel, AARP, Capital
                              One and Memorial Sloan Kettering Cancer Center. She is recognized internationally for thought
                              leadership on designing organizations that support high-performing teams.</p>
                      </div>
                      <div class="col talk">
                          <h3>Underwear, Clocks, and Companies: How to Change When You Must</h3>
                          <p>Bree explains why those at the top of organizations must be instigators of change, and how to work through human responses
                          like resistance and vulnerability.  </p>
                      </div>
                  </div>
              </div>
          </div>


          <div className="modal" id="matt-keller">
              <div class="modal__inner">
                  <div class="modal-close"></div>
                  <div class="speaker">
                      <h2>Matt Keller</h2>
                      <h3>Senior Director of XPRIZE</h3>
                  </div>
                  <div class="modal-columns">
                      <div class="col bio">
                          <p>As the Senior Director of Global Learning XPRIZE, Matt challenges teams from around the world to create innovative technologies.
                              Previously as Vice President of One Laptop per Child (OLPC), Keller led OLPC’s ground-breaking
                              literacy project testing the theory that children from non-literate communities could teach themselves
                              to read using tablets filled with off-the-shelf applications.</p>
                      </div>
                      <div class="col talk">
                          <h3>Shooting for the Stars</h3>
                          <p>Competition plays a pivotal role in innovation. Matt shares insights from watching entrepreneurs and private businesses compete
                          to break barriers and solve the Earth’s most pressing problems.</p>
                      </div>
                  </div>


              </div>
          </div>


          <div className="modal" id="jonathan-kini">
              <div class="modal__inner">
                  <div class="modal-close"></div>
                  <div class="speaker">
                      <h2>Jonathan Kini</h2>
                      <h3>CEO of Drax Energy</h3>
                  </div>
                  <div class="modal-columns">
                      <div class="col bio">
                          <p>As CEO of Drax Retail, Jonathan oversees business operations and champions strategy across Haven Power and Opus Energy. He
                              is responsible for pursuing increased business growth through small-to-medium enterprise (SME)
                              sectors, and for sustaining and growing Drax Retail’s industrial and commercial (I&C) customer
                              base. Previously Jonathan worked at Vodafone as Director of SME, and at Virgin Media.</p>
                      </div>
                      <div class="col talk">
                          <h3>From Big Idea to Tangible Solutions—Energizing My Journey</h3>
                          <p>(Description coming soon.)</p>
                      </div>
                  </div>


              </div>
          </div>


          <div className="modal" id="mitch-joel">
              <div class="modal__inner">
                  <div class="modal-close"></div>
                  <div class="speaker">
                      <h2>Mitch Joel</h2>
                      <h3>President of Mirum Canada</h3>
                  </div>
                  <div class="modal-columns">
                      <div class="col bio">
                          <p>Mitch has been called a marketing and communications visionary, interactive expert and community leader. He is also an author,
                              blogger, podcaster and passionate speaker who connects with people worldwide by sharing his innovation
                              insights on digital marketing and business transformation. He has been named one of the top 100
                              online marketers in the world, and awarded Canada’s Top 40 Under 40.</p>
                      </div>
                      <div class="col talk">
                          <h3>ALGO/RHYTHM</h3>
                          <p>We’ve all seen brands fail spectacularly due to their inability (or unwillingness) to evolve with new business models. Mitch
                          explains why innovating your brand is more critical than ever, and how starting small builds confidence that your investment
                          will pay off in the long run.</p>
                      </div>
                  </div>


              </div>
          </div>


          <div className="modal" id="tamara-ingram">
              <div class="modal__inner">
                  <div class="modal-close"></div>
                  <div class="speaker">
                      <h2>Tamara Ingram</h2>
                      <h3>CEO of J. Walter Thompson Worldwide</h3>
                  </div>
                  <div class="modal-columns">
                      <div class="col bio">
                          <p>Tamara joined J. Walter Thompson Company in 2016 as CEO where she oversees the agency’s global network. Previously at WPP,
                              Tamara oversaw the group’s 45 global account teams, which represented one-third of the Group’s
                              $20 billion revenue with over 38,000 employees. She has extensive experience leading innovative
                              advertising agencies, and has previously served as Grey UK’s Group CEO and global leader on their
                              Proctor & Gamble (P&G) account.</p>
                      </div>
                      <div class="col talk">
                          <h3>Innovating Like a Bull in a China Shop</h3>
                          <p>(Description coming soon.)</p>
                      </div>
                  </div>


              </div>
          </div>


          <div className="modal" id="lucie-greene">
              <div class="modal__inner">
                  <div class="modal-close"></div>
                  <div class="speaker">
                      <h2>Lucie Greene</h2>
                      <h3>Worldwide Director of J. Walter Thompson Intelligence</h3>
                  </div>
                  <div class="modal-columns">
                      <div class="col bio">
                          <p>At J. Walter Thompson, Lucie leads The Innovation Group’s ongoing research into emerging global consumer behaviors, cultural
                              changes and sector innovation with deep-dive studies and daily insights. She’s a thought leadership
                              columnist for Campaign, writes for the Financial Times and has spoken at conferences including
                              CES, SXSW, Web Summit and Adweek, discussing future trends across multiple lifestyle sectors.
                              </p>
                      </div>
                      <div class="col talk">
                          <h3>How to be a Future-Focused Brand</h3>
                          <p>Lucie guides us through current trends for future-proofing your business, dissecting some of the best examples in today’s
                          do-or-die climate.</p>
                      </div>
                  </div>


              </div>
          </div>


          <div className="modal" id="jamie-mclellan">
              <div class="modal__inner">
                  <div class="modal-close"></div>
                  <div class="speaker">
                      <h2>Jamie McLellan</h2>
                      <h3>CTO of J. Walter Thompson Worldwide</h3>
                  </div>
                  <div class="modal-columns">
                      <div class="col bio">
                          <p>Innovative technology that helps solve challenges, enable transformation and enhance experiences like artificial intelligence
                              (AI) are what motivate and excite Jamie. An architect by training, Jamie tries—sometime successfully—to
                              operate on the intersection of his left and right brains.</p>
                      </div>
                      <div class="col talk">
                          <h3>Solving Human Problems with AI</h3>
                          <p>Jamie explains why intelligence can never be artificial, and how our human ability to interpret context makes people, not
                          technology, the most important factor in achieving purpose-led innovation.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal" id="brett-hurt">
              <div class="modal__inner">
                  <div class="modal-close"></div>
                  <div class="speaker">
                      <h2>Brett Hurt</h2>
                      <h3>CEO & Co-founder of data.world, Founder of Coremetrics and Bazaarvoice</h3>
                  </div>
                  <div class="modal-columns">
                      <div class="col bio">
                          <p>At data.world, Brett is building meaningful, collaborative and abundant data resources in the world. He founded
                              Coremetrics and Bazaarvoice before IBM’s acquisition. To support Austin’s entrepreneurs, Brett serves
                              as a Partner at Capital Factory and Mentor at Techstars Austin. He also serves as the Chairman of the
                              Board at Edgecase and serves on the Board of Conscious Capitalism.
                          </p>
                      </div>
                      <div class="col talk">
                          <h3>The Secrets of Making Profits with Purpose</h3>
                          <p>Brett dives into the concept of Conscious Capitalism, providing personal insights from his experience creating billion-dollar purpose-led business models that better serve us all, including investors.</p>
                      </div>
                  </div>
              </div>
          </div>


          <div class="modal two-speakers" id="she-said">
              <div class="modal__inner">
                  <div class="modal-close"></div>
                  <div class="modal-columns">
                      <div class="col">
                          <div class="speaker-header">
                              <h2>Lynne Capozzi</h2>
                              <h3>CMO, Acquia</h3>
                          </div>
                          <div class="bio">
                              <p>As Acquia’s CMO, Lynne oversees all global marketing functions, including corporate communications, content and events. In
                                  2011, Lynne left Acquia to pursue nonprofit work full-time, returning in 2016 to lead Acquia’s next stage of growth.
                                  She was previously CMO at JackBe, an enterprise mashup software company, and VP at Lotus Development, later acquired
                                  by IBM. Lynne is also on the board of directors at the Boston Children’s Hospital Trust and runs a nonprofit through
                                  the hospital.</p>
                          </div>
                      </div>
                      <div class="col">
                          <div class="speaker-header">
                              <h2>Chris Stone</h2>
                              <h3>CPO, Acquia</h3>
                          </div>
                          <div class="bio">
                              <p>Responsible for engineering, DevOps, product management and integrated digital experiences for the Acquia Platform, Chris
                                  has more than 30 years’ experience in enterprise software development and open source solutions. With Eric Schmidt, former
                                  CEO of Google and current Executive Chairman of Alphabet, Chris was part of Novell’s remarkable 1990s turnaround, and
                                  later served as vice-chairman and co-CEO. Chris earned a certificate in advanced office systems engineering from MIT.</p>
                          </div>
                      </div>
                  </div>
                  <div class="talk">
                      <h3>She Said, He Said: How Product & Marketing Can See Eye to Eye on the Customer Journey</h3>
                      <p>Acquia’s CMO and CTO throw down in a battle for product and market alignment, with the aim of achieving their mutual North Star: enhancing customer experience.</p>
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
