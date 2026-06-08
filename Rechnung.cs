namespace Invoicing;

public class Rechnung
{
    public Rechnungsnummer Rechnungsnummer { get; }
    public DateOnly Rechnungsdatum { get; }
    public decimal Amount { get; }

    public Rechnung(Rechnungsnummer rechnungsnummer, DateOnly date, decimal amount)
    {
        Rechnungsnummer = rechnungsnummer;
        Rechnungsdatum = date;
        Amount = amount;
    }
}

public readonly record struct Rechnungsnummer(int Year, int Month, int Sequence)
{
    // Format: YYYY-mm-<sequential>
    public override string ToString() => $"{Year:D4}-{Month:D2}-{Sequence}";

    public static Rechnungsnummer Parse(string value)
    {
        var parts = value.Split('-');
        if (parts.Length != 3)
            throw new FormatException($"Invalid Rechnungsnummer format: '{value}'. Expected YYYY-mm-<sequence>.");

        return new Rechnungsnummer(int.Parse(parts[0]), int.Parse(parts[1]), int.Parse(parts[2]));
    }
}

public class RechnungService
{
    private readonly List<Rechnung> _rechnungen = new();

    public void Add(Rechnung rechnung) => _rechnungen.Add(rechnung);

    public IReadOnlyList<Rechnung> GetRechnungen(int year) =>
        _rechnungen.Where(r => r.Rechnungsnummer.Year == year).ToList();
}
