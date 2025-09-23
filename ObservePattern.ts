interface Subscriber {
    update(news: string): void;
}

// Subject interface
interface NewsAgency {
    addSubscriber(subscriber: Subscriber): void;
    removeSubscriber(subscriber: Subscriber): void;
    notifySubscribers(): void;
}

// ConcreteSubject
class DailyNews implements NewsAgency {
    private subscribers: Subscriber[] = [];
    private latestNews: string = "";

    addSubscriber(subscriber: Subscriber): void {
        this.subscribers.push(subscriber);
    }

    removeSubscriber(subscriber: Subscriber): void {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }

    notifySubscribers(): void {
        for (const sub of this.subscribers) {
            sub.update(this.latestNews);
        }
    }

    setNews(news: string): void {
        console.log(`📢 News updated: ${news}`);
        this.latestNews = news;
        this.notifySubscribers();
    }
}

// ConcreteObserver
class SubscriberA implements Subscriber {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(news: string): void {
        console.log(`${this.name} received news: ${news}`);
    }
}
