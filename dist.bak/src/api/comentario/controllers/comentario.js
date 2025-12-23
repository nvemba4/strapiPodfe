const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::comentario.comentario', ({ strapi }) => ({
    async delete(ctx) {
        const { id } = ctx.params;
        const comentario = await strapi.db.query('api::comentario.comentario').findOne({
            where: { id: Number(id) },
            populate: ['noticia', 'evento', 'podcast'],
        });
        if (!comentario)
            return ctx.notFound('Comentário não encontrado');
        // Remove associações (se existirem)
        await strapi.db.query('api::comentario.comentario').update({
            where: { id: Number(id) },
            data: { noticia: null, evento: null, podcast: null },
        });
        // Agora deleta o comentário
        await strapi.db.query('api::comentario.comentario').delete({
            where: { id: Number(id) },
        });
        ctx.send({ message: 'Comentário removido com sucesso' });
    },
}));
