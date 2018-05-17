export class BlogPost {
    static nextId  = 0

    constructor(
        public title: string,
        public author: string,
        public createdAtDate: Date,
        public content: string, /*TODO: Markdown*/
        public keywords: Array<string>,
        public status: string = BlogPostStatus.ACTIVE,
        public id: number = BlogPost.nextId,
        public imageUrl = ''
      ) {}
}

export enum BlogPostStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}
