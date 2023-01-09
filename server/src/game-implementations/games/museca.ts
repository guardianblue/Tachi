import { GetGrade } from "./_common";
import { ProfileSumBestN } from "game-implementations/utils/profile-calc";
import { SessionAvgBest10For } from "game-implementations/utils/session-calc";
import { CuratorSkill } from "rg-stats";
import { MUSECA_GBOUNDARIES } from "tachi-common";
import type { GPTServerImplementation } from "game-implementations/types";

export const MUSECA_IMPL: GPTServerImplementation<"museca:Single"> = {
	validators: {},
	derivers: {
		grade: ({ score }) => GetGrade(MUSECA_GBOUNDARIES, score),
	},
	scoreCalcs: {
		curatorSkill: (scoreData, chart) => CuratorSkill.calculate(scoreData.score, chart.levelNum),
	},
	sessionCalcs: { curatorSkill: SessionAvgBest10For("curatorSkill") },
	profileCalcs: {
		curatorSkill: ProfileSumBestN("curatorSkill", 20),
	},
	classDerivers: {},
};
