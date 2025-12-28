import { useState, useEffect } from "react";
import { dailyQuests } from "@/data/dailyQuests";

export const useQuests = () => {
  const [quests, setQuests] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if localStorage has saved quests, load them
    const savedQuests = localStorage.getItem("daily-quests");

    if (savedQuests) {
      // if found, parse and set to state
      setQuests(JSON.parse(savedQuests));
    } else {
      setQuests(dailyQuests);
    }

    setLoading(false);
  }, []);

  // when quests change, update localStorage
  useEffect(() => {
    if (quests.length > 0) {
      localStorage.setItem("daily-quests", JSON.stringify(quests));
    }
  }, [quests]);

  /**
   * handle progress update for a quest
   * @param {number} questId
   * @param {number} newProgress
   */
  const updateQuestProgress = (questId, newProgress) => {
    setQuests((prevQuests) =>
      prevQuests.map((quest) =>
        quest.id === questId
          ? {
              ...quest,
              progress: newProgress,
              completed: newProgress >= quest.total,
            }
          : quest
      )
    );
  };

  /**
   * complete a quest by ID
   * @param {number} questId
   */
  const completeQuest = (questId) => {
    setQuests((prevQuests) =>
      prevQuests.map((quest) =>
        quest.id === questId
          ? {
              ...quest,
              progress: quest.total,
              completed: true,
            }
          : quest
      )
    );
  };

  /**
   *  reset all quests to initial state
   */
  const resetQuests = () => {
    const resetData = dailyQuests.map((quest) => ({
      ...quest,
      progress: 0,
      completed: false,
    }));
    setQuests(resetData);
    localStorage.setItem("daily-quests", JSON.stringify(resetData));
  };

  /**
   * get quest by ID
   * @param {number} questId
   * @returns {object}
   */
  const getQuestById = (questId) => {
    return quests.find((quest) => quest.id === questId);
  };

  /**
   * calculate the total earned XP from completed quests
   * @returns {number}
   */
  const getTotalEarnedXP = () => {
    return quests
      .filter((quest) => quest.completed)
      .reduce((total, quest) => total + quest.xp, 0);
  };

  /**
   * calculate the total earned coins from completed quests
   * @returns {number} -
   */
  const getTotalEarnedCoins = () => {
    return quests
      .filter((quest) => quest.completed)
      .reduce((total, quest) => total + quest.coins, 0);
  };

  /**
   * calculte number of completed quests
   * @returns {number}
   */
  const getCompletedCount = () => {
    return quests.filter((quest) => quest.completed).length;
  };

  return {
    // data
    quests,
    loading,

    // functions
    updateQuestProgress,
    completeQuest,
    resetQuests,
    getQuestById,

    // stats
    getTotalEarnedXP,
    getTotalEarnedCoins,
    getCompletedCount,
    totalQuests: quests.length,
  };
};
// الحمد لله
