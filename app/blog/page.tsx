import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/components/ui/pagination";
import { AnimatedSection } from "@/app/components/animated/AnimatedSection";
import { AnimatedCard } from "@/app/components/animated/AnimatedCard";
import { getAllPosts, getAllCategories } from "@/app/lib/mdx";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";

export const metadata = {
  title: "Blog | Marketing & Automation Insights",
  description:
    "Expert tips, strategies, and industry insights to help you grow your business through marketing and automation.",
};

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const selectedCategory = params.category || "all";
  const postsPerPage = 9;

  const allPosts = await getAllPosts();
  const categories = await getAllCategories();

  // Filter by category
  const filteredPosts =
    selectedCategory === "all"
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Generate pagination array
  const getPaginationItems = () => {
    const items = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      if (currentPage <= 3) {
        items.push(1, 2, 3, 4, "ellipsis", totalPages);
      } else if (currentPage >= totalPages - 2) {
        items.push(
          1,
          "ellipsis",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        items.push(
          1,
          "ellipsis",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "ellipsis",
          totalPages
        );
      }
    }

    return items;
  };

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4" variant="outline">
            Blog & Resources
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Marketing & Automation Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert tips, strategies, and industry insights to help you grow your business
            through marketing and automation.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 px-4 border-b border-border bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <Tabs value={selectedCategory} className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="all" asChild>
                <Link href="/blog?page=1">All Posts</Link>
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} asChild>
                  <Link href={`/blog?category=${encodeURIComponent(category)}&page=1`}>
                    {category}
                  </Link>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Blog Grid */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {paginatedPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No posts found.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {paginatedPosts.map((post) => (
                  <AnimatedCard key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                      <Card className="h-full border-border bg-accent hover:border-primary transition-colors duration-300 cursor-pointer">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{post.readingTime}</span>
                            </div>
                          </div>
                          <CardTitle className="text-2xl hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {post.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </time>
                            </div>
                            <span>•</span>
                            <span>{post.author}</span>
                          </div>
                          {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {post.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedCard>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious
                            href={`/blog?${selectedCategory !== "all" ? `category=${selectedCategory}&` : ""}page=${currentPage - 1}`}
                          />
                        </PaginationItem>
                      )}

                      {getPaginationItems().map((item, index) =>
                        item === "ellipsis" ? (
                          <PaginationItem key={`ellipsis-${index}`}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        ) : (
                          <PaginationItem key={item}>
                            <PaginationLink
                              href={`/blog?${selectedCategory !== "all" ? `category=${selectedCategory}&` : ""}page=${item}`}
                              isActive={item === currentPage}
                            >
                              {item}
                            </PaginationLink>
                          </PaginationItem>
                        )
                      )}

                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext
                            href={`/blog?${selectedCategory !== "all" ? `category=${selectedCategory}&` : ""}page=${currentPage + 1}`}
                          />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          )}
        </div>
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection className="py-24 px-4 border-t border-border bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest marketing and automation tips delivered to your inbox every
            week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
