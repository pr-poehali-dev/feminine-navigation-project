import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [showContactDialog, setShowContactDialog] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/40 via-white to-slate-100/50">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-heading font-semibold text-primary">
              Denis Mureskae
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <button
                onClick={() => scrollToSection('about')}
                className="text-primary/80 hover:text-primary transition-colors"
              >
                О себе
              </button>
              <button
                onClick={() => scrollToSection('format')}
                className="text-primary/80 hover:text-primary transition-colors"
              >
                Формат работы
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-primary/80 hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => setShowContactDialog(true)}
                className="text-primary/80 hover:text-primary transition-colors"
              >
                Запись
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight">
                Ты не сломана. Ты просто живёшь не из своего места.
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 font-normal leading-relaxed">
                Я помогаю женщинам вернуть ясность, опору и направление — без
                насилия над собой, иллюзий и чужих сценариев.
              </p>
              <Button
                onClick={() => setShowContactDialog(true)}
                size="lg"
                className="btn-glass px-8 py-6 text-base rounded-xl"
              >
                → Записаться на встречу
              </Button>
            </div>
            <div className="animate-fade-in-delayed opacity-0">
              <div className="glass rounded-2xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/photo_2025-11-11_16-02-37.jpeg"
                  alt="Denis Mureskae"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
            Если откликается — ты по адресу
          </h2>
          <div className="space-y-4">
            {[
              'ты многое чувствуешь, но не понимаешь, куда это применить',
              'деньги не соответствуют твоему уровню глубины',
              'ты устала «разбираться с собой» без результата',
              'вокруг шум, а внутри — ощущение тупика',
              'ты не хочешь быть «удобной», но не знаешь, кем быть вместо этого',
            ].map((text, i) => (
              <div
                key={i}
                className="glass p-6 rounded-xl flex items-start gap-4 hover:bg-white/80 transition-all"
              >
                <div className="text-primary text-xl mt-1">•</div>
                <p className="text-lg text-foreground/90 font-normal">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary">
            Моя работа — не мотивация. Это навигация.
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-normal leading-relaxed max-w-3xl mx-auto">
            Я не даю универсальных советов. Я помогаю увидеть твою реальную
            конфигурацию: мышление, эмоции, стиль решений, ограничения и точки
            роста. После этого появляется: ясность, внутренняя тишина,
            конкретные шаги, ощущение «я на своём месте».
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Диагностика',
                desc: 'Глубокий разбор мышления, паттернов и реальных блоков.',
              },
              {
                title: 'Отражение',
                desc: 'Я называю то, что ты чувствуешь, но не формулируешь.',
              },
              {
                title: 'Сборка',
                desc: 'Мы соединяем смысл, деньги, реализацию и образ жизни.',
              },
              {
                title: 'Поддержка',
                desc: 'Без давления. Без игры в «гуру». Чётко и по-человечески.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass p-8 rounded-xl space-y-4 hover:scale-105 transition-transform"
              >
                <h3 className="font-heading text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-foreground/80 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-dark p-12 rounded-2xl text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
              Это не для всех — и это нормально
            </h2>
            <p className="text-lg text-slate-100 font-normal leading-relaxed max-w-2xl mx-auto">
              Моя работа не подойдёт, если ты: ждёшь волшебной таблетки, хочешь,
              чтобы тебя «починили», не готова смотреть правде в глаза, ищешь
              быстрый дофамин вместо изменений.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white/30">
        <div className="container mx-auto max-w-4xl space-y-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary text-center">
            Кто я
          </h2>
          <div className="glass p-10 rounded-2xl space-y-8 text-left">
            <div className="space-y-4">
              <p className="text-lg text-foreground/90 font-medium leading-relaxed">
                Я не коуч, не мотивационный спикер, не эзотерик, не психолог в
                классическом смысле и не инфоговорун.
              </p>
              <p className="text-lg text-foreground/80 font-normal leading-relaxed">
                Моя ниша — работа с мышлением и восприятием людей на стыке
                смысла, эстетики и реальности.
              </p>
              <p className="text-lg text-foreground/80 font-normal leading-relaxed">
                Я помогаю людям видеть себя и свою жизнь без иллюзий,
                распознавать, где они живут не свою жизнь, и находить точку
                точного действия, которое даёт реальный сдвиг, а не вдохновение
                на два дня.
              </p>
            </div>

            <div className="pt-6 border-t border-primary/20">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                Что именно я делаю
              </h3>
              <div className="space-y-3">
                {[
                  'показываю человеку его слепые зоны — без утешений и "поддержки ради поддержки"',
                  'перевожу внутренний хаос в ясную структуру решений',
                  'соединяю интуицию, эмоции и холодную реальность, а не противопоставляю их',
                  'работаю один на один, глубоко, точно, без массовых программ',
                  'использую образ, символ, диалог и смысл, а не техники ради техник',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="text-primary text-lg mt-1">•</div>
                    <p className="text-foreground/80 font-normal">{text}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-foreground/90 font-medium mt-6 italic">
                Я не "веду за руку". Я ставлю зеркало, от которого невозможно
                отвернуться.
              </p>
            </div>

            <div className="pt-6 border-t border-primary/20">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                С кем я работаю
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-foreground/80 font-medium mb-3">
                    Мои люди — это:
                  </p>
                  <div className="space-y-2">
                    {[
                      'женщины 28–45, умные, чувствующие, уставшие "тащить"',
                      'те, у кого всё вроде есть, но внутри пусто или застряло',
                      'те, кто слишком долго был сильным, удобным или "правильным"',
                      'те, кто чувствует, что жизнь проходит мимо, но не понимает — где именно сбой',
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="text-primary text-lg mt-1">•</div>
                        <p className="text-foreground/80 font-normal">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-foreground/80 font-medium mb-3">
                    Я не работаю с теми, кто хочет:
                  </p>
                  <div className="space-y-2">
                    {[
                      'быстрых лайфхаков',
                      'волшебных таблеток',
                      'чтобы их пожалели или погладили по голове',
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="text-red-500 text-lg mt-1">×</div>
                        <p className="text-foreground/80 font-normal">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-primary/20">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                Моя ценность
              </h3>
              <p className="text-lg text-foreground/90 font-medium mb-4">
                Моя ценность — ясность.
              </p>
              <p className="text-foreground/80 font-normal mb-4">
                После разговора со мной:
              </p>
              <div className="space-y-2 mb-6">
                {[
                  'становится тихо в голове',
                  'появляется один честный вектор, а не десять желаний',
                  'уходит самообман',
                  'возвращается ощущение "я на своём месте"',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="text-primary text-lg mt-1">•</div>
                    <p className="text-foreground/80 font-normal">{text}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-foreground/90 font-medium italic">
                Я не обещаю лёгкий путь. Я помогаю перестать идти ложным.
              </p>
            </div>

            <div className="pt-6 border-t border-primary/20">
              <p className="text-xl text-foreground/90 font-medium leading-relaxed italic text-center">
                Я работаю с людьми, которые готовы перестать врать себе и хотят
                жить свою жизнь, а не чью-то версию успеха.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="format" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl space-y-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary text-center">
            Формат работы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'User', text: 'Индивидуально' },
              { icon: 'Video', text: 'Онлайн / офлайн' },
              { icon: 'Lock', text: 'Конфиденциально' },
              { icon: 'ShieldCheck', text: 'Без записи и трансляций' },
            ].map((item, i) => (
              <div
                key={i}
                className="glass p-6 rounded-xl flex flex-col items-center gap-4 text-center hover:bg-white/80 transition-all"
              >
                <Icon name={item.icon} size={32} className="text-primary" />
                <p className="text-foreground/90 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              onClick={() => setShowContactDialog(true)}
              size="lg"
              className="btn-glass px-8 py-6 text-base rounded-xl"
            >
              → Записаться на первую встречу
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white/30">
        <div className="container mx-auto max-w-6xl space-y-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary text-center">
            Услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Индивидуальная работа 1-на-1',
                desc: 'Глубинный диалог, прояснение жизненного и профессионального направления, сборка мышления и решений.',
              },
              {
                title: 'Эстетическое и смысловое консультирование',
                desc: 'Работа с образом себя, внутренний конфликт и самореализация, выбор, который «чувствуется правильным».',
              },
              {
                title: 'Стратегия жизни и переходов',
                desc: 'Выход из тупика, смена этапа, решения без давления и насилия над собой.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="glass p-8 rounded-xl space-y-6 hover:scale-105 transition-transform flex flex-col"
              >
                <h3 className="font-heading text-xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="text-foreground/80 font-normal leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <Button
                  onClick={() => setShowContactDialog(true)}
                  variant="outline"
                  className="w-full btn-glass rounded-xl"
                >
                  Подробнее / Запросить формат
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass p-12 rounded-2xl text-center space-y-8">
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
              Ты можешь продолжать ждать, а можешь начать слышать себя
              по-настоящему.
            </p>
            <Button
              onClick={() => setShowContactDialog(true)}
              size="lg"
              className="btn-glass px-8 py-6 text-base rounded-xl"
            >
              → Начать работу
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center space-y-4">
          <p className="font-heading text-lg font-semibold">Denis Mureskae</p>
          <p className="text-sm font-normal opacity-90">
            Стратег · Навигатор смыслов
          </p>
        </div>
      </footer>

      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="glass rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl font-semibold">
              Выберите удобный способ связи
            </DialogTitle>
            <DialogDescription className="text-foreground/70 font-normal">
              Я отвечу вам в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <a
              href="https://wa.me/79680601602"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass p-6 rounded-xl hover:bg-white/80 transition-all group"
            >
              <Icon
                name="MessageCircle"
                size={32}
                className="text-green-600 group-hover:scale-110 transition-transform"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground">WhatsApp</div>
                <div className="text-sm text-foreground/70 font-normal">
                  +7 968 060 16 02
                </div>
              </div>
            </a>
            <a
              href="https://t.me/mureskae"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass p-6 rounded-xl hover:bg-white/80 transition-all group"
            >
              <Icon
                name="Send"
                size={32}
                className="text-blue-500 group-hover:scale-110 transition-transform"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground">Telegram</div>
                <div className="text-sm text-foreground/70 font-normal">
                  @mureskae
                </div>
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
