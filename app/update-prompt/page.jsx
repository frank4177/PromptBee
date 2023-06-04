"use client";

import Form from "@components/Form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  
  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      // Set Prompt Detail
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    // Get Prompt Details
    if (promptId) getPromptDetails();
  }, [promptId]);

  // Update Prompt Details
  //  @param {object}
  const updatePrompt = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Check if promptId is present , Alert or Modal
    if (!promptId) return alert("Missing PromptId!");

    try {
      //  Update Prompt
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      // Redirect to Home
      if (response.ok) {
        router.push("/");
      }
      // Handle Error
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
