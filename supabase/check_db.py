import sqlite3, pathlib, sys
db = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else pathlib.Path(__file__).parent.parent / "edu.db"
conn = sqlite3.connect(db)
rows = conn.execute("SELECT type, name FROM sqlite_master ORDER BY type, name").fetchall()
for t, n in rows:
    print(f"  {t:8} {n}")
p = conn.execute("SELECT COUNT(*) FROM edu_progress").fetchone()[0]
q = conn.execute("SELECT COUNT(*) FROM edu_quiz_state").fetchone()[0]
print(f"\n  edu_progress   : {p}행")
print(f"  edu_quiz_state : {q}행")
conn.close()
