
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Twitter } from 'lucide-react';

interface AboutSectionProps {
  language: string;
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const jokes = [
    {
      en: "The problem with our country is that the people with brains don't have courage, and the people with courage don't have brains.",
      hi: "हमारे देश की समस्या यह है कि जिनके पास दिमाग है उनके पास साहस नहीं है, और जिनके पास साहस है उनके पास दिमाग नहीं है।"
    },
    {
      en: "They asked, 'Why so critical of the government?' I said, 'Why so sensitive? It's not like I'm your ex or something.'",
      hi: "उन्होंने पूछा, 'सरकार की इतनी आलोचना क्यों?' मैंने कहा, 'इतना संवेदनशील क्यों? ऐसा नहीं है कि मैं आपका एक्स हूं या कुछ और।'"
    },
    {
      en: "Our society is like that strict parent who says you can do anything you want as long as it's exactly what I want.",
      hi: "हमारा समाज उस सख्त माता-पिता की तरह है जो कहता है कि आप जो चाहें कर सकते हैं जब तक कि यह बिल्कुल वही हो जो मैं चाहता हूं।"
    },
    {
      en: "My mom says I need to get married. I told her 'Mom, I can disappoint one woman at a time. Why bring another into this?'",
      hi: "मेरी मां कहती हैं कि मुझे शादी करनी चाहिए। मैंने उनसे कहा 'मां, मैं एक बार में एक महिला को निराश कर सकता हूं। इसमें दूसरी को क्यों शामिल करें?'"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' ? 'About Kunal Kamra' : 'कुणाल कामरा के बारे में'}
          </h2>
          <p className="max-w-2xl mx-auto opacity-80">
            {language === 'en'
              ? "India's boldest voice in comedy, known for his sharp political satire and unapologetic style."
              : "भारत का सबसे बेबाक कॉमेडी आवाज़, अपने तीखे राजनीतिक व्यंग और बेबाक शैली के लिए जाना जाता है।"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="relative">
              <img 
                src="https://i.postimg.cc/tTS9kntN/kunal-about.jpg" 
                alt="Kunal Kamra" 
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-8 -right-8 bg-comedy-purple text-white p-4 rounded-xl shadow-lg max-w-xs hidden md:block">
                <p className="italic text-sm">
                  {language === 'en'
                    ? "Comedy is just a socially acceptable way to tell uncomfortable truths."
                    : "कॉमेडी बस असुविधाजनक सच्चाइयों को बताने का एक सामाजिक रूप से स्वीकार्य तरीका है।"}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Twitter size={16} />
                  <span className="text-xs">@kunalkamra88</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4 gradient-text">
                {language === 'en' ? 'The Fearless Satirist' : 'निडर व्यंग्यकार'}
              </h3>
              
              <div className="space-y-4">
                <p>
                  {language === 'en'
                    ? "Kunal Kamra is one of India's most recognizable stand-up comedians, known for his sharp political commentary and fearless approach to comedy. Born and raised in Mumbai, his journey from an advertising professional to a comedy sensation is a testament to his unique voice and perspective."
                    : "कुणाल कामरा भारत के सबसे पहचाने जाने वाले स्टैंड-अप कॉमेडियन में से एक हैं, जो अपनी तीखी राजनीतिक टिप्पणी और कॉमेडी के प्रति निडर दृष्टिकोण के लिए जाने जाते हैं। मुंबई में जन्मे और पले-बढ़े, विज्ञापन पेशेवर से लेकर कॉमेडी सनसनी तक की उनकी यात्रा उनकी अनोखी आवाज़ और दृष्टिकोण का प्रमाण है।"}
                </p>
                
                <p>
                  {language === 'en'
                    ? "With millions of followers across social media platforms and sold-out shows nationwide, Kunal has established himself as a prominent voice in Indian comedy. His work often addresses social issues, political controversies, and everyday observations with his signature satirical style."
                    : "सोशल मीडिया प्लेटफॉर्म पर लाखों फॉलोअर्स और पूरे देश में हाउसफुल शो के साथ, कुणाल ने भारतीय कॉमेडी में खुद को एक प्रमुख आवाज के रूप में स्थापित किया है। उनका काम अक्सर सामाजिक मुद्दों, राजनीतिक विवादों और रोजमर्रा की टिप्पणियों को उनकी विशिष्ट व्यंग्यात्मक शैली से संबोधित करता है।"}
                </p>
              </div>
            </div>

            <Tabs defaultValue="quotes" className="w-full">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="quotes" className="w-1/3">
                  {language === 'en' ? 'Famous Quotes' : 'प्रसिद्ध कथन'}
                </TabsTrigger>
                <TabsTrigger value="achievements" className="w-1/3">
                  {language === 'en' ? 'Achievements' : 'उपलब्धियां'}
                </TabsTrigger>
                <TabsTrigger value="facts" className="w-1/3">
                  {language === 'en' ? 'Fun Facts' : 'मजेदार तथ्य'}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="quotes" className="pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {jokes.map((joke, index) => (
                    <Card key={index} className="bg-muted h-full">
                      <CardContent className="p-4">
                        <p className="italic text-sm">
                          "{language === 'en' ? joke.en : joke.hi}"
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="achievements" className="space-y-4 pt-2">
                <div>
                  <h4 className="font-bold text-comedy-orange">
                    {language === 'en' ? 'YouTube Gold Button' : 'यूट्यूब गोल्ड बटन'}
                  </h4>
                  <p className="text-sm opacity-80">
                    {language === 'en'
                      ? "For reaching 1 million subscribers on his YouTube channel"
                      : "अपने यूट्यूब चैनल पर 1 मिलियन सब्सक्राइबर तक पहुंचने के लिए"}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-comedy-orange">
                    {language === 'en' ? 'Most Popular Indian Comedian 2022' : 'सबसे लोकप्रिय भारतीय कॉमेडियन 2022'}
                  </h4>
                  <p className="text-sm opacity-80">
                    {language === 'en'
                      ? "Awarded by Indian Entertainment Awards"
                      : "इंडियन एंटरटेनमेंट अवार्ड्स द्वारा सम्मानित"}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-comedy-orange">
                    {language === 'en' ? 'Nationwide Tour Success' : 'राष्ट्रव्यापी टूर की सफलता'}
                  </h4>
                  <p className="text-sm opacity-80">
                    {language === 'en'
                      ? "Sold out 50+ shows across 15 cities in 2024"
                      : "2024 में 15 शहरों में 50+ हाउसफुल शो"}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-comedy-orange">
                    {language === 'en' ? 'Digital Content Creator Award' : 'डिजिटल कंटेंट क्रिएटर अवार्ड'}
                  </h4>
                  <p className="text-sm opacity-80">
                    {language === 'en'
                      ? "For his podcast 'Shut Up Ya Kunal'"
                      : "अपने पॉडकास्ट 'शट अप या कुणाल' के लिए"}
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="facts" className="space-y-4 pt-2">
                <div>
                  <h4 className="font-bold text-comedy-pink">
                    {language === 'en' ? 'Former Advertising Professional' : 'पूर्व विज्ञापन पेशेवर'}
                  </h4>
                  <p className="text-sm opacity-80">
                    {language === 'en'
                      ? "Kunal worked in advertising before turning to comedy full-time"
                      : "कुणाल ने पूर्णकालिक कॉमेडी में आने से पहले विज्ञापन में काम किया था"}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-comedy-pink">
                    {language === 'en' ? 'First Open Mic' : 'पहला ओपन माइक'}
                  </h4>
                  <p className="text-sm opacity-80">
                    {language === 'en'
                      ? "His first comedy performance was at a Mumbai cafe in 2013"
                      : "उनका पहला कॉमेडी प्रदर्शन 2013 में एक मुंबई कैफे में था"}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-comedy-pink">
                    {language === 'en' ? 'Aviation Enthusiast' : 'विमानन शौकीन'}
                  </h4>
                  <p className="text-sm opacity-80">
                    {language === 'en'
                      ? "Kunal has a deep interest in aviation and airports"
                      : "कुणाल को विमानन और हवाई अड्डों में गहरी रुचि है"}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-comedy-pink">
                    {language === 'en' ? 'Self-Taught Comedian' : 'स्वयं-सिखाया हुआ कॉमेडियन'}
                  </h4>
                  <p className="text-sm opacity-80">
                    {language === 'en'
                      ? "Never took formal comedy classes - learned by performing"
                      : "कभी औपचारिक कॉमेडी कक्षाएं नहीं लीं - प्रदर्शन करके सीखा"}
                  </p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="pt-4">
              <Button 
                className="bg-comedy-orange hover:bg-comedy-orange/90 btn-bounce"
                onClick={() => document.getElementById('shows')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {language === 'en' ? 'Book Tickets for Live Show' : 'लाइव शो के लिए टिकट बुक करें'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
