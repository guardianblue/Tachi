import UpdateScore from "./update-score";
import deepmerge from "deepmerge";
import db from "external/mongo/db";
import { CreateScoreID } from "lib/score-import/framework/score-importing/score-id";
import t from "tap";
import ResetDBState from "test-utils/resets";
import { TestingIIDXSPScore } from "test-utils/test-data";
import type { ImportDocument, ScoreDocument, SessionDocument } from "tachi-common";

const mockImportDocument: ImportDocument = {
	userID: 1,
	userIntent: false,
	classDeltas: [],
	createdSessions: [],
	errors: [],
	goalInfo: [],
	gptStrings: [],
	importID: "mockImportID",
	importType: "file/batch-manual",
	questInfo: [],
	scoreIDs: ["TESTING_SCORE_ID", "scoreid_2"],
	timeFinished: 1000,
	timeStarted: 0,
	game: "iidx",
	playtypes: ["SP"],
};

const mockSessionDocument: SessionDocument = {
	userID: 1,
	calculatedData: {},
	desc: "",
	game: "iidx",
	playtype: "SP",
	highlight: false,
	name: "",
	scoreIDs: ["TESTING_SCORE_ID", "scoreid_2"],
	sessionID: "mockSessionID",
	timeEnded: 1000,
	timeInserted: 0,
	timeStarted: 0,
};

t.test("#UpdateScore", (t) => {
	t.beforeEach(ResetDBState);

	t.test("Should update a score and everything pertaining to it", async (t) => {
		const score = deepmerge<ScoreDocument>(TestingIIDXSPScore, {
			scoreData: { score: 1020 },
		} as ScoreDocument);

		const newScoreID = CreateScoreID("iidx:SP", score.userID, score, score.chartID);

		await db.imports.insert(mockImportDocument);
		await db.sessions.insert(mockSessionDocument);

		// This function doesn't return anything, instead,
		// we need to check external state.
		await UpdateScore(TestingIIDXSPScore, score);

		const dbScore = await db.scores.findOne({
			scoreID: "scoreid_1",
		});

		t.equal(dbScore, null, "Should have updated the scoreID from the database.");

		const dbNewScore = await db.scores.findOne({
			scoreID: newScoreID,
		});

		t.hasStrict(
			dbNewScore?.scoreData,
			score.scoreData,
			"The new score inserted into the database should have the new scoreData."
		);

		const dbImport = await db.imports.findOne({
			importID: "mockImportID",
		});

		t.strictSame(
			dbImport?.scoreIDs,
			[newScoreID, "scoreid_2"],
			"Should update TESTING_SCORE_ID to the new hash."
		);

		const dbSession = await db.sessions.findOne({
			sessionID: "mockSessionID",
		});

		t.strictSame(
			dbSession?.scoreIDs,
			[newScoreID, "scoreid_2"],
			"Should update TESTING_SCORE_ID to the new hash."
		);

		t.end();
	});

	t.end();
});
