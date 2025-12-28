"use client";
import { useState, useEffect } from "react";
import { dailyQuests } from "@/data/dailyQuests";
import DailyQuestPage from "../../components/quest/DailyQuestCard";

export default function DailyQuestPage() {
  return (
    <div>
        <header>
        <h1>Daily Quests</h1>
        <h2>Time Left </h2>
        </header>
        <main>

        <p>List of daily quests will be displayed here.</p>
        
        </main>
    </div>
  );
}