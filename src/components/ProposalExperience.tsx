"use client";

import { useState, type CSSProperties } from "react";
import { siteConfig } from "@/content/site-config";
import { TeddyCharacter } from "@/components/TeddyCharacter";

type Answer = "yes" | "no";

export function ProposalExperience() {
  const [letterOpened, setLetterOpened] = useState(false);
  const [questionVisible, setQuestionVisible] = useState(false);
  const [answer, setAnswer] = useState<Answer | null>(null);

  const recipient = siteConfig.recipientName.trim() || "cậu";
  const sender = siteConfig.senderName.trim();

  function chooseAnswer(value: Answer) {
    setAnswer(value);
  }

  function returnToLetter() {
    setAnswer(null);
    setQuestionVisible(false);
  }

  return (
    <main className="gift-page">
      <div className="paper-grain" aria-hidden="true" />
      <header className="topline">
        <a className="wordmark" href="#top" aria-label="Teddy Love — về đầu trang">
          <span className="wordmark-heart">♡</span>
          <span>little things, for you</span>
        </a>
        <span className="topline-note">A TINY LETTER · MADE WITH CARE</span>
      </header>

      <section className={`gift-stage ${questionVisible ? "gift-stage--question" : "gift-stage--letter"}`} id="top" aria-live="polite">
        {!questionVisible ? (
          <div className="letter-scene">
            <div className="letter-side-note handwritten" aria-hidden="true">a little something<br />just for you ♡</div>

            <div className="letter-layout">
              <div className="letter-visual">
                <span className="orbit orbit-one" aria-hidden="true">✳</span>
                <span className="orbit orbit-two" aria-hidden="true">♡</span>
                <span className="orbit orbit-three" aria-hidden="true">✧</span>
                <TeddyCharacter mood={letterOpened ? "heart" : "wave"} className="letter-teddy" priority />
                <div className={`envelope ${letterOpened ? "envelope--opened" : ""}`} aria-hidden="true">
                  <div className="envelope-back" />
                  <div className="envelope-paper"><span>dear {recipient},</span><b>♡</b></div>
                  <div className="envelope-front" />
                  <div className="envelope-flap" />
                  <span className="envelope-seal">♡</span>
                </div>
                <span className="visual-caption handwritten">một chú gấu gửi cậu</span>
              </div>

              <article className={`letter-paper ${letterOpened ? "letter-paper--opened" : ""}`}>
                <div className="letter-paper-top">
                  <span>{siteConfig.letter.kicker}</span>
                  <span className="paper-stamp">♡</span>
                </div>

                {!letterOpened ? (
                  <div className="letter-cover">
                    <p className="handwritten letter-greeting">Gửi {recipient},</p>
                    <h1>{siteConfig.letter.title}</h1>
                    <p className="letter-intro">Tớ có một điều nho nhỏ muốn gửi đến cậu. Mở lá thư nhé?</p>
                    <button className="button button-primary" type="button" onClick={() => setLetterOpened(true)}>
                      Mở lá thư <span aria-hidden="true">↗</span>
                    </button>
                    <p className="letter-hint">Chỉ mất một chút thời gian thôi ♡</p>
                  </div>
                ) : (
                  <div className="letter-content" key="letter-content">
                    <p className="handwritten letter-greeting">{siteConfig.letter.greeting.replace("cậu", recipient)}</p>
                    <h1>{siteConfig.letter.title}</h1>
                    <div className="letter-paragraphs">
                      {siteConfig.letter.paragraphs.map((paragraph, index) => (
                        <p className="letter-paragraph" key={`${index}-${paragraph}`} style={{ "--line-delay": `${index * 180}ms` } as CSSProperties}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="letter-signature">
                      <p className="handwritten">{siteConfig.letter.signOff}</p>
                      <span>{sender || "♡"}</span>
                    </div>
                    <div className="letter-next-wrap">
                      <button className="button button-primary" type="button" onClick={() => setQuestionVisible(true)}>
                        Đọc tiếp nhé <span aria-hidden="true">♡</span>
                      </button>
                    </div>
                  </div>
                )}

                <div className="letter-paper-bottom">
                  <span>FOLDED WITH CARE</span>
                  <span>✳</span>
                </div>
              </article>
            </div>

            <div className="scene-footer">
              <span>TAKE YOUR TIME</span>
              <span>MADE FOR {recipient.toUpperCase()}</span>
            </div>
          </div>
        ) : (
          <div className="question-scene">
            <button className="back-link" type="button" onClick={returnToLetter}>← Quay lại lá thư</button>
            <div className={`question-art ${answer ? "question-art--answered" : ""}`}>
              <span className="question-star question-star--one" aria-hidden="true">✳</span>
              <span className="question-star question-star--two" aria-hidden="true">♡</span>
              <TeddyCharacter mood={answer === "yes" ? "hug" : answer === "no" ? "shy" : "heart"} className="question-teddy" priority />
              {answer === "yes" ? <div className="bloom" aria-hidden="true"><i>✿</i><i>✿</i><i>✿</i><i>✿</i><i>✿</i></div> : null}
            </div>

            {!answer ? (
              <div className="question-copy">
                <p className="eyebrow">{siteConfig.question.eyebrow}</p>
                <h2>{siteConfig.question.title}</h2>
                <p className="question-subtitle">{siteConfig.question.subtitle}</p>
                <div className="answer-actions">
                  <button className="button button-yes" type="button" onClick={() => chooseAnswer("yes")}>
                    {siteConfig.question.yes}
                  </button>
                  <button className="button button-no" type="button" onClick={() => chooseAnswer("no")}>
                    {siteConfig.question.no}
                  </button>
                </div>
                <p className="no-pressure">Không cần vội vàng đâu. Câu trả lời của cậu luôn được tôn trọng.</p>
              </div>
            ) : (
              <div className={`answer-message answer-message--${answer}`}>
                <p className="eyebrow">{answer === "yes" ? "A LITTLE HAPPY MOMENT" : "THANK YOU FOR BEING HONEST"}</p>
                <h2>{answer === "yes" ? siteConfig.question.yesTitle : siteConfig.question.noTitle}</h2>
                <p>{answer === "yes" ? siteConfig.question.yesMessage : siteConfig.question.noMessage}</p>
                <span className="answer-divider">♡</span>
                <small>{siteConfig.question.closing}</small>
                <button className="text-button" type="button" onClick={returnToLetter}>Đọc lại lá thư</button>
              </div>
            )}
          </div>
        )}
      </section>

      <footer className="site-footer">
        <span>TEDDY LOVE <b>♡</b></span>
        <span>một món quà nhỏ, dành riêng cho {recipient}</span>
      </footer>
    </main>
  );
}
