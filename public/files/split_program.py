from PyPDF2 import PdfReader, PdfWriter
import os

# Input PDF
input_pdf = "icei2026-conference-program.pdf"

# Output folder
output_dir = "program"
os.makedirs(output_dir, exist_ok=True)

# Load PDF
reader = PdfReader(input_pdf)

# 🔥 IMPORTANT: Adjust page numbers based on your PDF
# NOTE: Python uses 0-based indexing (page 1 = index 0)

splits = {
    "session-01-plenary.pdf": [1],        # Page 2
    "session-02-ict.pdf": [2],            # Page 3
    "session-03-tcs.pdf": [3],            # Page 4
    "session-04-nere.pdf": [4],           # Page 5
    "session-05-ecs.pdf": [5],            # Page 6
    "session-06-eshrp.pdf": [6],          # Page 7
    "session-07-ms.pdf": [7],             # Page 8
    "session-08-bme.pdf": [8],            # Page 9
    "session-09-nt.pdf": [9],             # Page 10
    "session-10-rai.pdf": [10],           # Page 11
    "session-11-rge.pdf": [11],           # Page 12
    "poster-session.pdf": list(range(12, 25)),  # Pages 13–25
}

# Split process
for filename, pages in splits.items():
    writer = PdfWriter()

    for page_num in pages:
        if page_num < len(reader.pages):
            writer.add_page(reader.pages[page_num])

    output_path = os.path.join(output_dir, filename)

    with open(output_path, "wb") as f:
        writer.write(f)

    print(f"Created: {output_path}")

print("✅ PDF splitting complete!")