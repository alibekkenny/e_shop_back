const resolvers = {
    Query: {
        products: async (parent, args, context, info) => {
            const where = args.filter
                ? args.filter : {};
            const products = await context.prisma.product.findMany({
                where,
                skip: args.skip,
                take: args.take,
                orderBy: args.orderBy,
            });


            return products;
        },
        product: async (parent, args, context, info) => {
            const product = await context.prisma.product.findUnique({
                where: {
                    id: args.id
                },
            });
            return product;
        },
    },
    Mutation: {
        createProduct: async (parent, args, context, info) => {
            try {
                const product = await context.prisma.product.create({
                    data: args.input,
                })
                return product;
            } catch (e) {
                console.log(e);
                return null;
            }
        },
        updateProduct: async (parent, args, context, info) => {
            try {
                const product = await context.prisma.product.update({
                    where: {
                        id: args.id
                    },
                    data: args.input,
                });
                return product;
            } catch (e) {
                console.log(e);
                return null;
            }
        },
        deleteProduct: async (parent, args, context, info) => {
            try {
                const product = await context.prisma.product.delete({
                    where: {
                        id: args.id
                    },
                });
                return product;
            }
            catch (e) {
                console.log(e);
                return null;
            }
        },

    }
}

exports.resolvers = resolvers