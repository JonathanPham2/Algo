import re
text = "The years 2023 and 1999 were significant, but 123 and 12345 are not four-digit numbers."

# With word boundaries
matches = re.findall(r"\b\d{4}\b", text)
print("With \b:", matches)  # Output: ['2023', '1999']

# Without word boundaries
matches = re.findall(r"\d{4}", text)
print("Without \b:", matches)  # Output: ['2023', '1999', '1234']