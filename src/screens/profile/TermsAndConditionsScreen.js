import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text } from 'react-native';

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

const TermsAndConditions = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.tcContainer}
        scrollEventThrottle={10}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            setAccepted(true);
          }
        }}
      >
        <Text style={styles.title}>Terms and conditions</Text>
        <Text style={styles.tcP}>Welcome to Naka, operated by Naka Connect Inc. (“Naka Connect”) for all users. As
          used in this Agreement, the terms “Naka,” “us,” “we,” the “Company”, and “our” shall refer to Naka Connect,
          Inc., as appropriate. Please take a few moments to read these Terms before using the App, because once you
          access, view or use the App, you are going to be legally bound by these Terms.</Text>
        <Text style={styles.heading1}>1. NAKA RULES</Text>
        <Text style={styles.tcP}>By using our Services, you represent and warrant that:</Text>
        <Text style={styles.tcL}>{'\t'}1.You are at least 17 years old;</Text>
        <Text style={styles.tcL}>{'\t'}2. You are be legally permitted to use the App by the laws of your home
          country.</Text>
        <Text style={styles.tcP}>By accessing or using our Services on www.nakaconnect.com (the “Website”), the Naka
          mobile application (the “App”), or any other platforms or services Naka may offer (collectively, the
          “Service” or our “Services”), you agree to, and are bound by, these Terms of Use (the “Terms” or
          “Agreement”). This Agreement applies to anyone who accesses or uses our Services, regardless of registration
          or subscription status.</Text>
        <Text style={styles.tcP}>Your use of our Services is also subject to the Privacy and Cookie Policies, and any
          terms disclosed and agreed to by you when you purchase additional features, products, or services from Naka
          (“Additional Terms Upon Purchase”), which are incorporated into this Agreement by reference. If you do not
          wish to be bound by this Agreement, do not use our Services.</Text>
        <Text style={styles.tcP}>We reserve the right to modify, amend, or change the Terms at any time. Notice of any
          material change will be posted on this page with an updated effective date. In certain circumstances, we may
          notify you of a change to the Terms via email or other means, as appropriate under the circumstances;
          however, you are responsible for regularly checking this page for notice of any changes. We agree that
          future changes will not be retroactive without your consent. Your continued use of our Services constitutes
          your acceptance of any change, and you will be legally bound by the updated Terms. If you do not accept a
          change to the terms, you should stop using our Services immediately.</Text>
        <Text style={styles.tcP}>You can delete your account at any time by logging into the App, going to the
          “Settings” tab, and selecting “Account”, and following the instructions to terminate your membership.
          However, you will need to cancel / manage any External Service Purchases through your External Service
          Account (e.g., iTunes, Google Play) to avoid additional billing.</Text>
        <Text style={styles.tcP}>Naka reserves the right to investigate and, if appropriate, suspend or terminate your
          account without a refund if you have violated these Terms, misused our Services, or behaved in a way that
          Naka regards as inappropriate or unlawful, on or off our Services. We reserve the right to make use of any
          personal, technological, legal, or other means available to enforce the Terms ((including without limitation
          blocking specific IP addresses), at any time without liability and without the obligation to give you prior
          notice, including, but not limited to, preventing you from accessing the Services.</Text>
        <Text style={styles.tcP}>If your account is terminated by you or by Naka for any reason, these Terms continue
          and remain enforceable between you and Naka, and you will not be entitled to any refund for purchases made.
          Your information will be maintained and deleted in accordance with our Privacy Policy.</Text>
        <Text style={styles.heading1}>2. ACCOUNT ELIGIBILITY; YOUR RESPONSIBILITIES</Text>
        <Text style={styles.tcP}>If at any time you cease to meet these requirements, you must immediately delete your
          account, and we retain the right to remove your access to our services without warning.</Text>
        <Text style={styles.heading4}>You agree to:</Text>
        <Text style={styles.tcL}>{'\u2022'} Comply with these Terms, and check this page from time to time to ensure
          you are aware of any change;</Text>
        <Text style={styles.tcL}>{'\u2022'} Comply with all applicable laws, including without limitation, privacy
          laws, intellectual property laws, anti-spam laws, and regulatory requirements;</Text>
        <Text style={styles.tcL}>{'\u2022'} Present yourself respectfully and authentically by adding at least one
          photo that shows your face, and use your real name.</Text>
        <Text style={styles.heading1}>3. CONTENT</Text>
        <Text style={styles.tcP}>While using our Services, you will have access to: </Text>
        <Text style={styles.tcL}>{'\t'}1. content that you upload or provide while using our Services (“Your
          Content”)</Text>
        <Text style={styles.tcL}>{'\t'}2. content that other users upload or provide while using our Services (“Member
          Content”);</Text>
        <Text style={styles.tcL}>{'\t'}3. content that Naka provides on and through our Services (“Our
          Content”).</Text>
        <Text style={styles.tcP}>Prohibited Content—Naka</Text>
        <Text style={styles.tcP}>Prohibits uploading or sharing content that:</Text>
        <Text style={styles.tcL}>{'\u2022'} Could reasonably be deemed to be offensive or to harass, upset, embarrass,
          alarm or annoy any other person;</Text>
        <Text style={styles.tcL}>{'\u2022'} Is obscene, pornographic, violent or otherwise may offend human dignity,
          or contains nudity;</Text>
        <Text style={styles.tcL}>{'\u2022'} Is abusive, insulting or threatening, discriminatory or that promotes or
          encourages racism, sexism, hatred or bigotry;</Text>
        <Text style={styles.tcL}>{'\u2022'} Encourages or facilitates any illegal activity including, without
          limitation, terrorism, inciting racial hatred or the submission of which in itself constitutes committing a
          criminal offense;</Text>
        <Text style={styles.tcL}>{'\u2022'} Is defamatory, libelous, or untrue;</Text>
        <Text style={styles.tcL}>{'\u2022'} Relates to commercial activities (including, without limitation, sales,
          competitions, promotions, and advertising, solicitation for services, links to other websites or premium
          line telephone numbers);</Text>
        <Text style={styles.tcL}>{'\u2022'} Involves the transmission of “junk” mail or “spam”;</Text>
        <Text style={styles.tcL}>{'\u2022'} Contains any spyware, adware, viruses, corrupt files, worm programs or
          other malicious code designed to interrupt, damage or limit the functionality of or disrupt any software,
          hardware, telecommunications, networks, servers or other equipment, Trojan horse or any other material
          designed to damage, interfere with, wrongly intercept or expropriate any data or personal information
          whether from Naka or otherwise;</Text>
        <Text style={styles.tcL}>{'\u2022'} Infringes upon any third party’s rights (including, without limitation,
          intellectual property rights and privacy rights);</Text>
        <Text style={styles.tcL}>{'\u2022'} shows another person which was created or distributed without that
          person’s consent.</Text>
        <Text style={styles.tcP}>In this agreement, “content” includes, without limitation, all text, images, video,
          audio, or other material on our Services, including information on users’ profiles and in direct messages
          between users.</Text>
        <Text style={styles.tcP}>Naka operates a zero-tolerance policy for this kind of content. The uploading or
          sharing of content that violates these terms (“Prohibited Content”) may result in the immediate suspension
          or termination of your account.</Text>
        <Text style={styles.heading4}>YOUR CONTENT</Text>
        <Text style={styles.tcP}>You are responsible and liable for Your Content, and, therefore, you agree to
          indemnify, defend, release, and hold us harmless from any claims made in
          connection with Your Content.</Text>
        <Text style={styles.tcP}>You represent and warrant to us that the information you provide to us is accurate,
          including any information submitted through other third-party sources (if applicable), and that you will
          update your account information as necessary to ensure its accuracy.</Text>
        <Text style={styles.tcP}>You may not display any personal contact or banking information, whether in relation to
          you or any other
          person (for example, names, home addresses or postcodes, telephone numbers, email addresses, URLs, credit/
          debit card or other banking details). If you choose to reveal any personal information about yourself to
          other users, you do so at your own risk. We encourage you to use caution in disclosing any personal
          information online.</Text>
        <Text style={styles.tcP}>Your content will be visible to other people around the world, so be sure that you are
          comfortable sharing
          Your Content before you post. You acknowledge and agree that Your Content may be viewed by other users, and,
          notwithstanding these Terms, other users may share Your Content with third parties. By uploading Your
          Content on Naka, you represent and warrant to us that you have all necessary rights and licenses to do so
          and automatically grant us a license to a non-exclusive, royalty free, perpetual, worldwide licence to use
          Your Content in any way (including, without limitation, editing, copying, modifying, adapting, translating,
          reformatting, creating derivative works from, incorporating into other works, advertising, distributing and
          otherwise making available to the general public such Content, whether in whole or in part and in any format
          or medium currently known or developed in the future).</Text>
        <Text style={styles.tcP}>We may assign and/or sub-license the above licence to our affiliates and successors
          without any further
          approval by you.</Text>
        <Text style={styles.tcP}>We may monitor or review Your Content, and we have the right to remove, delete, edit,
          limit, or block or
          prevent access to any of Your Content at any time in our sole discretion. Furthermore, you understand agree
          that we have no obligation to display or review Your Content.</Text>
        <Text style={styles.heading4}>MEMBER CONTENT</Text>
        <Text style={styles.tcP}>Other users will also share content on our Services. Member Content belongs to the user
          who posted the content and is stored on our servers and displayed at the direction of that user</Text>
        <Text style={styles.tcP}>You do not have any rights in relation to Member Content, and you may only use Member
          Content to the extent that your use is consistent with our Services’ purpose of allowing use to communicate
          with and meet one another. You may not copy the Member Content or use Member Content for commercial purposes,
          to spam, to harass, or to make unlawful threats. We reserve the right to terminate your account if you misuse
          Member Content.</Text>
        <Text style={styles.heading4}>OUR CONTENT</Text>
        <Text style={styles.tcP}>Any other text, content, graphics, user interfaces, trademarks, logos, sounds, artwork,
          images, and other intellectual property appearing on our Services is owned, controlled or licensed by us and
          protected by copyright, trademark and other intellectual property law rights. All rights, title, and interest
          in and to Our Content remains with us at all times.</Text>
        <Text style={styles.tcP}>We grant you a non-exclusive, limited, personal, non-transferable, revocable, licence
          to access and use Our Content, without the right to sublicense, under the following conditions: </Text>
        <Text style={styles.tcL}>• You shall not use meta tags or code or other devices containing any reference to Naka
          or the platform (or any trademark, trade name, service mark, logo or slogan of Naka) to direct any person to
          any other website for any purpose;</Text>
        <Text style={styles.tcL}>• You shall not modify, adapt, sublicense, translate, sell, reverse engineer, decipher,
          decompile or otherwise disassemble any portion of our Services, or cause others to do so.</Text>
        <Text style={styles.tcP}>we reserve all other rights.</Text>
        <Text style={styles.heading1}>4. INAPPROPRIATE CONTENT AND MISCONDUCT; REPORTING</Text>
        <Text style={styles.tcP}>We are committed to maintaining a positive and respectful Naka community, and we do not
          tolerate any inappropriate content or misconduct, whether on or off of the Services. We encourage you to
          report any inappropriate Member Content or misconduct by other users. You can report a user directly by
          tapping the three dots in the top right of any profile and selecting “Report”. </Text>
        <Text style={styles.tcP}>You agree that you will not:</Text>
        <Text style={styles.tcL}>{'\u2022'} Misrepresent your identity, age, current or previous positions,
          qualifications, or affiliations with a person or entity;</Text>
        <Text style={styles.tcL}>{'\u2022'} Use our Services in a way to interfere with, disrupt or negatively affect
          the platform, the servers, or our Services’ networks;</Text>
        <Text style={styles.tcL}>{'\u2022'} Use our Services for any harmful, illegal, or nefarious purpose;</Text>
        <Text style={styles.tcL}>{'\u2022'} Harass, bully, stalk, intimidate, assault, defame, harm or otherwise
          mistreat any person;</Text>
        <Text style={styles.tcL}>{'\u2022'} Use our Services in relation to fraud, a pyramid scheme, or other similar
          practice; or</Text>
        <Text style={styles.tcL}>{'\u2022'} Violate the terms of the license granted to you by Naka (see Section 6
          below).</Text>
        <Text style={styles.tcL}>{'\u2022'} Use any robot, crawler, site search/retrieval application, proxy or other
          manual or automatic device, method or process to access, retrieve, index, “data mine,” or in any way reproduce
          or circumvent the navigational structure or presentation of our Services or its contents;</Text>
        <Text style={styles.tcL}>{'\u2022'} Upload viruses or other malicious code or otherwise compromise the security
          of our Services;</Text>
        <Text style={styles.tcL}>{'\u2022'} “Frame” or “mirror” any part of our Services without Naka prior written
          authorization;</Text>
        <Text style={styles.tcL}>{'\u2022'} Use or develop any third-party applications that interact with our Services
          or Member Content or information without our written consent;</Text>
        <Text style={styles.tcL}>{'\u2022'} Use, access, or publish the Naka application programming interface without
          our written consent;</Text>
        <Text style={styles.tcL}>{'\u2022'} Probe, scan or test the vulnerability of our Services or any system or
          network; or</Text>
        <Text style={styles.tcL}>{'\u2022'} Encourage, promote, or agree to engage in any activity that violates these
          Terms.</Text>
        <Text style={styles.heading1}>5. PRIVACY</Text>
        <Text style={styles.tcP}>For information about how Naka collect, use, and share your personal data, please read
          our Privacy Policy. By using our Services, you agree that we may use your personal data in accordance with our
          Privacy Policy.</Text>
        <Text style={styles.heading1}>6. RIGHTS YOU ARE GRANTED BY NAKA</Text>
        <Text style={styles.tcP}>For as long as you comply with these Terms, Naka grants you a personal, worldwide,
          royalty-free, non-assignable, non-exclusive, revocable, and non-sublicensable license to access and use our
          Services for purposes as intended by Naka and permitted by these Terms and applicable laws.</Text>
        <Text style={styles.heading1}>7. RIGHTS YOU GRANT NAKA</Text>
        <Text style={styles.tcP}>By creating an account, you grant to Naka a worldwide, perpetual, transferable,
          sub-licensable, royalty-free right and license to host, store, use, copy, display, reproduce, adapt, edit,
          publish, translate, modify, and distribute Your Content, including any information you authorize us to access
          from Facebook or other third-party source (if applicable), in whole or in part, and in any format or medium
          currently known or developed in the future. Naka’s license to Your Content shall be non-exclusive, except that
          Naka’s license shall be exclusive with respect to derivative works created through use of our Services. For
          example, Naka would have an exclusive license to screenshots of our Services that include Your Content.</Text>
        <Text style={styles.tcP}>In addition, so that Naka can prevent the use of Your Content outside of our Services,
          you authorize Naka to act on your behalf with respect to infringing uses of Your Content taken from our
          Services by other users or third parties. This expressly includes the authority, but not the obligation, to
          send notices pursuant to service provider (i.e., Notice and Notice Takedown Notices) on your behalf if Your
          Content is taken and used by third parties outside of our Services. Naka is not obligated to take any action
          with regard to use of Your Content by other users or third parties. Naka’s license to Your Content is subject
          to your rights under applicable law (for example, laws regarding personal data protection to the extent the
          content contains personal information as defined by those laws).</Text>
        <Text style={styles.tcP}>In consideration for Naka allowing you to use our Services, you agree that we, our
          affiliates, and our third-party partners may place advertising on our Services. By submitting suggestions or
          feedback to Naka regarding our Services, you agree that Naka may use and share such feedback for any purpose
          without compensating you.</Text>
        <Text style={styles.tcP}>You agree that Naka may access, preserve, and disclose your account information,
          including Your Content, if required to do so by law or upon a good faith belief that such access,
          preservation, or disclosure is reasonably necessary to: (i) comply with legal process; (ii) enforce these
          Terms; (iii) respond to claims that any content violates the rights of third parties; (iv) respond to your
          requests for customer service; or (v) protect the rights, property or personal safety of the Company or any
          other person.</Text>
        <Text style={styles.heading1}>8. EXTERNAL SERVICE PURCHASES; PREMIUM SERVICES; IN-APP PURCHASES</Text>
        <Text style={styles.tcP}>Naka may offer products and services for purchase through iTunes, Google Play or other
          external services authorized by Naka (each, an “External Service,” and any purchases made thereon, an
          “External Service Purchase”). If you purchase a subscription, it will automatically renew until you cancel, in
          accordance with the terms disclosed to you at the time of purchase, as further described below. If you cancel
          your subscription, you will continue to have access to your subscription benefits until the end of your
          subscription period, at which point is will expire.
        </Text>
        <Text style={styles.tcP}>Because our Services may be utilized without a subscription, canceling your
          subscription does not remove your profile from our Services. If you wish to fully terminate your membership,
          you must terminate your membership as set forth in “Settings”.
        </Text>
        <Text style={styles.tcP}>When making a purchase on the Service, you may have the option to pay through an
          External Service, such as with your Apple ID or Google account (“your External Service Account”), and your
          External Service Account will be charged for the purchase in accordance with the terms disclosed to you at the
          time of purchase and the general terms applicable to your External Service Account. Some External Services may
          charge you sales tax, depending on where you live, which may change from time to time.</Text>
        <Text style={styles.tcP}>If your External Service Purchase includes an automatically renewing subscription, your
          External Service Account will continue to be periodically charged for the subscription until you cancel. After
          your initial subscription commitment period, and again after any subsequent subscription period, the
          subscription will automatically continue for the price and time period you agreed to when subscribing.
        </Text>
        <Text style={styles.tcP}>To cancel a subscription: If you do not want your subscription to renew automatically,
          or if you want to change or terminate your subscription, you must log in to your External Service Account and
          follow instructions to manage or cancel your subscription, even if you have otherwise deleted your account
          with us or if you have deleted the App from your device. For example, if you subscribed using your Apple ID,
          cancellation is handled by Apple, not Naka. To cancel a purchase made with your Apple ID, go to Settings >
          iTunes & App Stores > [click on your Apple ID] > View Apple ID > Subscriptions, then find your Naka
          subscription and follow the instructions to cancel. You can also request assistance at
          https://getsupport.apple.com. Similarly, if you subscribed on Google Play, cancellation is handled by Google.
          To cancel a purchase made through Google Play, launch the Google Play app on your mobile device and go to Menu
          > My Apps > Subscriptions, then find your Naka subscription and follow the instructions to cancel. You can
          also request assistance at https://play.google.com. If you cancel a subscription, you may continue to use the
          cancelled service until the end of your then-current subscription term. The subscription will not be renewed
          when your then-current term expires.</Text>
        <Text style={styles.tcP}>If you initiate a chargeback or otherwise reverse a payment made with your External
          Service Account, Naka may terminate your account immediately in its sole discretion. Naka will retain all
          funds charged to your External Service Account until you cancel your subscription through your External
          Service Account. Certain users may be entitled to request a refund. See Section 8b below for more
          information.</Text>
        <Text style={styles.tcP}>Generally, all purchases are final and nonrefundable, and there are no refunds or
          credits for partially used periods, except if the laws applicable in your jurisdiction provide for
          refunds.</Text>
        <Text style={styles.heading1}>9. DISCLAIMER</Text>
        <Text style={styles.tcP}>YOU UNDERSTAND THAT NAKA DOES NOT CONDUCT CRIMINAL BACKGROUND OR IDENTITY VERIFICATION
          CHECKS ON ITS USERS OR OTHERWISE INQUIRE INTO THE BACKGROUND OF ITS USERS. NAKA MAKES NO REPRESENTATIONS OR
          WARRANTIES AS TO THE CONDUCT, IDENTITY, INTENTIONS, LEGITIMACY, OR VERACITY OF USERS. NAKA RESERVES THE RIGHT
          TO CONDUCT—AND YOU AUTHORIZE NAKA TO CONDUCT—ANY CRIMINAL BACKGROUND CHECK OR OTHER SCREENINGS (SUCH AS SEX
          OFFENDER REGISTER SEARCHES) AT ANY TIME USING AVAILABLE PUBLIC RECORDS, AND YOU AGREE THAT ANY INFORMATION YOU
          PROVIDE MAY BE USED FOR THAT PURPOSE. IF THE COMPANY DECIDES TO CONDUCT ANY SCREENING THROUGH A CONSUMER
          REPORTING AGENCY, YOU HEREBY AUTHORIZE THE COMPANY TO OBTAIN AND USE A CONSUMER REPORT ABOUT YOU TO DETERMINE
          YOUR ELIGIBILITY UNDER THESE TERMS.</Text>
        <Text style={styles.tcP}>YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER USERS. SEX OFFENDER
          SCREENINGS AND OTHER TOOLS DO
          NOT GUARANTEE YOUR SAFETY AND ARE NOT A SUBSTITUTE FOR FOLLOWING THE SAFETY TIPS AND OTHER SENSIBLE SAFETY
          PRECAUTIONS. ALWAYS USE YOUR BEST JUDGMENT AND TAKE APPROPRIATE SAFETY PRECAUTIONS WHEN COMMUNICATING WITH OR
          MEETING NEW PEOPLE. COMMUNICATIONS RECEIVED THROUGH THE SERVICE, INCLUDING AUTOMATIC NOTIFICATIONS SENT BY
          NAKA, MAY RESULT FROM USERS ENGAGING WITH THE SERVICE FOR IMPROPER PURPOSES, INCLUDING FRAUD, ABUSE,
          HARASSMENT, OR OTHER SUCH IMPROPER BEHAVIOR.
        </Text>
        <Text style={styles.tcP}>NAKA PROVIDES OUR SERVICES ON AN “AS IS” AND “AS AVAILABLE” BASIS AND TO THE EXTENT
          PERMITTED BY APPLICABLE LAW, GRANTS NO WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR
          OTHERWISE WITH RESPECT TO OUR SERVICES (INCLUDING ALL CONTENT CONTAINED THEREIN), INCLUDING, WITHOUT
          LIMITATION, ANY IMPLIED WARRANTIES OF SATISFACTORY QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
          OR NON-INFRINGEMENT. NAKA DOES NOT REPRESENT OR WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, SECURE, OR
          ERROR FREE, ANY DEFECTS OR ERRORS IN OUR SERVICES WILL BE CORRECTED, OR THAT ANY CONTENT OR INFORMATION YOU
          OBTAIN ON OR THROUGH OUR SERVICES WILL BE ACCURATE. FURTHERMORE, NAKA MAKES NO GUARANTEES AS TO THE NUMBER OF
          ACTIVE USERS AT ANY TIME; USERS’ ABILITY OR DESIRE TO COMMUNICATE WITH OR MEET YOU, OR THE ULTIMATE
          COMPATIBILITY WITH OR CONDUCT BY USERS YOU MEET THROUGH THE SERVICES.</Text>
        <Text style={styles.tcP}>NAKA TAKES NO RESPONSIBILITY FOR ANY CONTENT THAT YOU OR ANOTHER USER OR THIRD PARTY
          POSTS, SENDS, OR RECEIVES THROUGH OUR SERVICES NOR DOES NAKA TAKE ANY RESPONSIBILITY FOR THE IDENTITY,
          INTENTIONS, LEGITIMACY, OR VERACITY OF ANY USERS WITH WHOM YOU MAY COMMUNICATION THROUGH NAKA. ANY MATERIAL
          DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF OUR SERVICES IS ACCESSED AT YOUR OWN DISCRETION AND RISK.
          NAKA IS NOT RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER HARDWARE, COMPUTER SOFTWARE, OR OTHER EQUIPMENT OR
          TECHNOLOGY INCLUDING, BUT WITHOUT LIMITATION, DAMAGE FROM ANY SECURITY BREACH OR FROM ANY VIRUS, BUGS,
          TAMPERING, FRAUD, ERROR, OMISSION, INTERRUPTION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER LINE OR
          NETWORK FAILURE, OR ANY OTHER TECHNICAL OR OTHER MALFUNCTION.</Text>
        <Text style={styles.tcP}>THE FOREGOING SHALL APPLY EVEN IF WE WERE ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          IF YOU BECOME DISSATISFIED IN ANY WAY WITH THE APP OR SITE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO STOP YOUR USE
          OF THE APP AND SITE.</Text>
        <Text style={styles.tcP}>YOU HEREBY WAIVE ANY AND ALL CLAIMS ARISING OUT OF YOUR USE OF THE APP OR SITE. BECAUSE
          SOME STATES DO NOT ALLOW THE DISCLAIMER OF IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN TYPES
          OF DAMAGES, THESE PROVISIONS MAY NOT APPLY TO YOU. IF ANY PORTION OF THIS LIMITATION ON LIABILITY IS FOUND TO
          BE INVALID OR UNENFORCEABLE FOR ANY REASON, THEN OUR AGGREGATE LIABILITY SHALL NOT EXCEED ONE HUNDRED DOLLARS
          ($100).</Text>
        <Text style={styles.tcP}>THE LIMITATION OF LIABILITY HEREIN IS A FUNDAMENTAL ELEMENT OF THE BASIS OF THE BARGAIN
          AND REFLECTS A FAIR ALLOCATION OF RISK. THE APP AND SITE WOULD NOT BE PROVIDED WITHOUT SUCH LIMITATIONS AND
          YOU AGREE THAT THE LIMITATIONS AND EXCLUSIONS OF LIABILITY, DISCLAIMERS AND EXCLUSIVE REMEDIES SPECIFIED
          HEREIN WILL SURVIVE EVEN IF FOUND TO HAVE FAILED IN THEIR ESSENTIAL PURPOSE.</Text>
        <Text style={styles.heading1}>11. THE NOTICE AND NOTICE REGIME</Text>
        <Text style={styles.tcP}>Naka has adopted the following policy towards copyright infringement in accordance with
          Canada’s Copyright Act. If you believe any Member Content or Our Content infringes upon your intellectual
          property rights, please submit a notification alleging such infringement including the following:</Text>
        <Text style={styles.tcL}>1. A physical or electronic signature of a person authorized to act on behalf of
          the owner of an exclusive right that is allegedly infringed;
        </Text>
        <Text style={styles.tcL}>2. Identification of the copyrighted work claimed to have been infringed, or, if
          multiple copyrighted works at a single online site are covered by a single
          notification, a representative list of such works;
        </Text>
        <Text style={styles.tcL}>Identification of the material claimed to be infringing or to be the subject of
          infringing activity and that is to be removed or access disabled and
          information reasonably sufficient to permit the service provider to locate the
          material;
        </Text>
        <Text style={styles.tcL}>4. Information reasonably sufficient to permit the service provider to contact
          you, such as an address, telephone number, and, if available, an electronic
          mail;
        </Text>
        <Text style={styles.tcL}>5. A statement that you have a good faith belief that use of the material in the
          manner complained of is not authorized by the copyright owner, its agent, or
          the law; and
        </Text>
        <Text style={styles.tcL}>6. A statement that, under penalty of perjury, the information in the notification
          is accurate and you are authorized to act on behalf of the owner of the
          exclusive right that is allegedly infringed.
        </Text>
        <Text style={styles.tcP}>Naka will terminate the accounts of repeat infringers.</Text>
        <Text style={styles.heading1}>12. LIMITATION OF LIABILITY.</Text>
        <Text style={styles.tcP}>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO
          EVENT WILL NAKA, ITS AFFILIATES, EMPLOYEES, LICENSORS, OR S ERVICE PROVIDERS BE L IABL E FOR ANY INDIRECT,
          CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING, WITHOUT LIMITATION, LOSS OF
          PROFITS, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE
          LOSSES, RESULTING FROM: (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES, (II) THE
          CONDUCT OR CONTENT OF OTHER USERS OR THIRD PARTIES ON, THROUGH, OR FOLLOWING USE OF THE SERVICES; OR (III)
          UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR CONTENT, EVEN IF NAKA HAS BEEN ADVISED OF THE POSSIBILITY OF
          SUCH DAMAGES. IN NO EVENT WILL NAKA’S AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS RELATING TO THE SERVICES
          EXCEED THE AMOUNT PAID, IF ANY, BY YOU TO NAKA FOR THE SERVICES WHILE YOU HAVE AN ACCOUNT. THE LIMITATION OF
          LIABILITY PROVISIONS SET FORTH IN THIS SECTION 13 SHALL APPLY EVEN IF YOUR REMEDIES UNDER THIS AGREEMENT FAIL
          WITH RESPECT TO THEIR ESSENTIAL PURPOSE.
        </Text>
        <Text style={styles.tcP}>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME
          OR ALL OF THE EXCLUSIONS AND LIMITATIONS IN THIS SECTION MAY NOT APPLY TO
          YOU.
        </Text>
        <Text style={styles.heading1}>13. DISPUTE RESOLUTION</Text>
        <Text style={styles.tcP}>If you are dissatisfied with our Services for any reason, please contact Naka Customer
          Service first so that we can try to resolve your concerns without the need of outside assistance. If you
          choose to pursue a claim against Naka, these terms will apply.</Text>
        <Text style={styles.heading1}>14a. ARBITRATION, CLASS-ACTION WAIVER, AND JURY WAIVER</Text>
        <Text style={styles.tcP}>Except for users residing within the EU or European Economic Area, and where
          prohibited by law:
        </Text>
        <Text style={styles.tcL}>1. The exclusive means of resolving any dispute or claim arising out of or relating to
          this Agreement (including any alleged breach thereof) or our Services shall be BINDING ARBITRATION
          administered by JAMS under the JAMS Streamlined Arbitration Rules & Procedures, except as modified by our
          Arbitration Procedures. The one exception to the exclusivity of arbitration is that either party has the right
          to bring an individual claim against the other in a small-claims court of competent jurisdiction, or, if filed
          in arbitration, the responding party may request that the dispute proceed in small claims court if the party’s
          claim is within the jurisdiction of the small claims court. If the responding party requests to proceed in
          small claims court before the appointment of the arbitrator, the arbitration shall be administratively closed,
          and if requested after the appointment of the arbitrator, the arbitrator shall determine if the dispute should
          be decided in arbitration or if the arbitration should be administratively closed and decided in small claims
          court. Whether you choose arbitration or small-claims court, you may not under any circumstances commence or
          maintain against the Company any class action, class arbitration, or other representative action or
          proceeding.</Text>
        <Text style={styles.tcL}>2. By using our Services in any manner, you agree to the above arbitration agreement.
          In doing so, YOU GIVE UP YOUR RIGHT TO GO TO COURT to assert or defend any claims between you and the Company
          (except for matters that may be taken to small-claims court). YOU ALSO GIVE UP YOUR RIGHT TO PARTICIPATE IN A
          CLASS ACTION OR OTHER CLASS PROCEEDING. Your rights will be determined by a NEUTRAL ARBITRATOR, NOT A JUDGE OR
          JURY, and the arbitrator shall determine all issues regarding the arbitrability of the dispute. You are
          entitled to a fair hearing before the arbitrator. The arbitrator can grant any relief that a court can, but
          you should note that arbitration proceedings are usually simpler and more streamlined than trials and other
          judicial proceedings. Decisions by the arbitrator are enforceable in court and may be overturned by a court
          only for very limited reasons. For details on the arbitration process, see our Arbitration Procedures.</Text>
        <Text style={styles.tcL}>3. Any proceeding to enforce this arbitration agreement, including any proceeding to
          confirm, modify, or vacate an arbitration award, may be commenced in any court of competent jurisdiction. In
          the event that this arbitration agreement is for any reason held to be unenforceable, any litigation against
          the Company (except for small-claims court actions) may be commenced only in the federal or state courts
          located in Canada. You hereby irrevocably consent to the jurisdiction of those courts for such
          purposes.</Text>
        <Text style={styles.tcL}>4. The online dispute settlement platform of the European Commission is available under
          http://ec.europa.eu/odr. Naka does not take part in dispute settlement procedures in front of a consumer
          arbitration entity for users residing in the EU or European Economic Area.</Text>
        <Text style={styles.heading1}>14b. GOVERNING LAW</Text>
        <Text style={styles.tcP}>Except for users residing in the EU or European Economic Area or elsewhere where our
          arbitration agreement is prohibited by law, the laws of Texas, U.S.A., excluding Texas’s conflict of laws
          rules, will apply to any disputes arising out of or relating to this Agreement or our Services.
          Notwithstanding the foregoing, the Arbitration Agreement in Section 15a above shall be governed by the Federal
          Arbitration Act. For the avoidance of doubt, the choice of Texas governing law shall not supersede any
          mandatory consumer protection legislation in such jurisdictions.</Text>
        <Text style={styles.heading1}>15c. VENUE</Text>
        <Text style={styles.tcP}>Except for users residing in the EU or European Economic Area, who may bring claims in
          their country of residence in accordance with applicable law, and except for claims that may be properly
          brought in a small claims court of competent jurisdiction in the county or other jurisdiction in which you
          reside or in Dallas County, Texas, all claims arising out of or relating to this Agreement, to our Services,
          or to your relationship with Naka that for whatever reason are not submitted to arbitration will be litigated
          exclusively in the federal or state courts of Dallas County, Texas, U.S.A. You and Naka consent to the
          exercise of personal jurisdiction of courts in the State of Texas and waive any claim that such courts
          constitute an inconvenient forum.</Text>
        <Text style={styles.heading1}>15. INDEMNITY </Text>
        <Text style={styles.tcP}>You agree, to the extent permitted under applicable law, to indemnify, defend, release,
          and hold harmless Naka, our affiliates, and their and our respective partners, licensors, affiliates,
          contractors, officers, directors, agents, representative, and employees from and against any and all third
          party actions, proceedings, complaints, demands, claims, damages (actual and/or consequential), losses, costs,
          liabilities, and expenses (including reasonable legal fees), including attorney’s fees, suffered or reasonably
          incurred by us arising as a result of, or in connection with:</Text>
        <Text style={styles.tcL}>1. any negligent acts, omissions or wilful misconduct by you;</Text>
        <Text style={styles.tcL}>2. your access to and use of the App;</Text>
        <Text style={styles.tcL}>3. the uploading or submission of Content to the App by you;</Text>
        <Text style={styles.tcL}>4. any breach of these Terms by you; and/or</Text>
        <Text style={styles.tcL}>5. your violation of any law or of any rights of any third party.</Text>
        <Text style={styles.tcP}>We retain the exclusive right to settle, compromise and pay any and all claims or
          causes of action which are brought against us without your prior consent. If we ask, you will co-operate fully
          and reasonably as required by us in the defence of any relevant claim.</Text>
        <Text style={styles.heading1}>16. ACCEPTANCE OF TERMS</Text>
        <Text style={styles.tcP}>By using our Services, whether through a mobile device, mobile application, or
          computer, you agree to be bound by (i) these Terms, which we may amend from time to time, (ii) our Privacy
          Policy and Cookie Policy, and (iii) any Additional Terms Upon Purchase. If you do not accept and agree to be
          bound by all of the
          terms of this Agreement, please do not use our Services. The section headings and summaries contained herein
          are inserted for convenience only and shall not be considered in interpreting any term or provision hereof.
          All pronouns and any variations thereof shall be deemed to refer to the masculine, feminine, neuter, singular
          or plural as the identity of the entities or persons referred to any require. Any word both capitalized and
          uncapitalized will be deemed to have the same meaning.
        </Text>
        <Text style={styles.heading1}>17. ENTIRE AGREEMENT</Text>
        <Text style={styles.tcP}>These Terms, with the Privacy Policy, Cookie Policy, and any Additional Terms
          Upon Purchase, contain the entire agreement between you and Naka regarding the use of our Services. The Terms
          supersede all previous agreements, representations, and arrangements between us, written or oral. If any
          provision of these Terms is held invalid, illegal, or otherwise unenforceable, the remainder of the Terms
          shall continue in full force and effect. The failure of the Company to exercise or enforce any right or
          provision of these Terms shall not constitute a waiver of such right or provision. You agree that your Naka
          account is non-transferable and all of your rights to your account and its content terminate upon your death,
          unless otherwise provided by law. Any rights and licenses granted hereunder, may not be transferred or
          assigned by you, but may be assigned by us without restriction. No agency, partnership, joint venture,
          fiduciary or other special relationship or employment is created as a result of these Terms, and you may not
          make any representations on behalf of or bind Naka in any manner.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');
const styles = {

  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
  },
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  tcContainer: {
    flex: 1,
  },

  button: {
    backgroundColor: '#136AC7',
    borderRadius: 5,
    padding: 10,
  },

  buttonDisabled: {
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10,
  },

  buttonLabel: {
    fontSize: 14,
    color: '#FFF',
    alignSelf: 'center',
  },
  heading1: {
    fontSize: 20,
  },
  heading4: {
    fontSize: 16,
    fontWeight: 'bold',
  },
};
export default TermsAndConditions;
