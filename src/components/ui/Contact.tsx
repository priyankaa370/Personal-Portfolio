/** 
 * @copyright 2025 priyankaPortfolio
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useForm } from "react-hook-form";
import { motion } from "motion/react";

/**
 * Custom Modules
 */
import { fadeUp }  from "@/lib/animations";


/**
 * Components
 */
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * Types
 */
type ContactFormValues = {
    name: string;
    company: string;
    email: string;
    location: string;
    message: string;
}

export const Contact = () => {
    const form = useForm<ContactFormValues>({
        defaultValues: {
            name: "",
            company: "",
            email: "",
            location: "",
            message: ""
        },
    });
    


    const onSubmit = async (values: ContactFormValues) => {
        try {
            const response = await fetch("https://formspree.io/f/mnjbqplg", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
            });

            if (response.ok) {
            form.reset();
            alert("Message sent successfully!");
            } else {
            alert("Something went wrong. Please try again.");
            }
        } 
        catch (error) {
            alert("Network error. Please try again later.");
        }
        };


    return (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeUp}
          className="mt-15 scroll-mt-10"
          id ="contact">    
            <SectionHeader subtitle="Contact Me" title="Get In Touch" />
        
            <div className="mt-6 mb-8 text-center space-y-3">
                
                <p className="text-sm text-muted-foreground">
                    Prefer direct contact? I’m always happy to connect and usually respond within{" "}
                    <span className="font-medium text-foreground">24 hours</span>.
                </p>

                <div className="flex flex-col items-center gap-2 text-sm">
                    <a
                    href="mailto:priyankanbarde@email.com"
                    className="hover:underline text-foreground"
                    >
                    📧 priyanka.barde@email.com
                    </a>

                    <a
                    href="https://www.linkedin.com/in/pb37/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-foreground"
                    >
                    🔗 linkedin.com/in/priyankabarde
                    </a>
                </div>
            </div>


            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mx-auto space-y-4 mt-10">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField 
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem className ='w-full'>
                                    <FormControl>
                                        <Input placeholder="Your Name" 
                                            className='w-full'
                                        {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }
                        />

                        <FormField 
                            control={form.control}
                            name="company"
                            render={({field}) => (
                                <FormItem className ='w-full'>
                                    <FormControl>
                                        <Input placeholder="Company Name" 
                                            className='w-full'
                                        {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }
                        />

                        <FormField 
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem className ='w-full'>
                                    <FormControl>
                                        <Input type = 'email'
                                            placeholder="you@example.com" 
                                            className='w-full'
                                        {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }
                        />

                        <FormField 
                            control={form.control}
                            name="location"
                            render={({field}) => (
                                <FormItem className ='w-full'>
                                    <FormControl>
                                        <Input type = 'text'
                                            placeholder="Location" 
                                            className='w-full'
                                        {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }
                        />

                        <FormField 
                            control={form.control}
                            name="message"
                            render={({field}) => (
                                <FormItem className ='w-full  lg:col-span-2'>
                                    <FormControl>
                                        <Textarea 
                                            placeholder="Write your message here..." 
                                            className='h-36 border-1'
                                        {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }
                        />

                        <Button type='submit' size='lg'>
                             Start a Conversation
                        </Button>

                        <p className="text-xs text-muted-foreground text-center mt-2">
                            Your message goes directly to my inbox. 
                        </p>

                    </div>
                </form>
            </Form>
        
        </motion.section>
    );
};