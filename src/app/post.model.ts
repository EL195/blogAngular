export class Post {
    public title: string
    public content: string
    public loveIts: number
    public created_at: Date

    constructor(
        pTitle: string,
        pContent: string,
        pCreated_at: Date,
    ) {
        this.title = pTitle
        this.content = pContent
        this.loveIts = 0
        if (pCreated_at != null) this.created_at = pCreated_at
        else this.created_at = this.getDate()
    }

    getDate() {
    // Vérifie si une date est défini et la retourne, sinon en créé une aléatoirement
        if (this.created_at) {
            return this.created_at
        } else {
            let year = Math.random() * 18 + 2000
            let month = Math.random() * 11
            let day = Math.random() * 28 // Pour éviter trop de code, je limite les jours à 28 (car février n'a que 28 jours)
            let hour = Math.random() * 23
            let minute = Math.random() * 59
            let second = Math.random() * 59
            return (this.created_at = new Date(
                year,
                month,
                day,
                hour,
                minute,
                second,
            ))
        }
    }
}
