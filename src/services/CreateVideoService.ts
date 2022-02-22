import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Videos";

type VideoRequest = {
    name: string,
    description: string,
    duration: number,
    category_id : string,
}

export class CreateVideosService {
    async execute({name, description,duration, category_id}:VideoRequest) : Promise<Error | Video>{
        const repo = getRepository(Video);
        const repoCategory = getRepository(Category);

        if(!(await repoCategory.findOne(category_id))){
            return new Error ("Categoria não existe!");
        }

        const video = repo.create({name, description,duration, category_id});

        await repo.save(video);

        return video;

    }
}