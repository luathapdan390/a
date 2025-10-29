export interface CalculationResults {
  financial: number;
  emotional: number;
  primal: number;
}

export const calculateLosses = (principal: number, years: number): CalculationResults => {
  const days = years * 365;

  // Financial loss: Future value of a daily annuity with 10% annual interest
  const dailyFinancialRate = 0.10 / 365;
  const financialLoss = principal * ( (Math.pow(1 + dailyFinancialRate, days) - 1) / dailyFinancialRate );

  // Emotional loss (happiness/wisdom units): Future value of a daily annuity
  const dailyEmotionalUnits = 10; // Daily contribution
  const dailyEmotionalRate = 0.07 / 365;
  const emotionalLoss = dailyEmotionalUnits * ( (Math.pow(1 + dailyEmotionalRate, days) - 1) / dailyEmotionalRate );

  // Primal loss (discipline/control units): Future value of a daily annuity
  const dailyPrimalUnits = 5; // Daily contribution
  const dailyPrimalRate = 0.05 / 365;
  const primalLoss = dailyPrimalUnits * ( (Math.pow(1 + dailyPrimalRate, days) - 1) / dailyPrimalRate );

  return {
    financial: financialLoss,
    emotional: emotionalLoss,
    primal: primalLoss,
  };
};

export const generateTenseSentences = (date: Date, years: number, financialLoss: number): { tense: string, sentence: string, translation: string }[] => {
  const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const formattedMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(financialLoss);
  
  const tenses = [
    { 
      tense: "Simple Present", 
      sentence: `I lose future opportunities when I don't read on a day like ${formattedDate}.`,
      translation: `Tôi đánh mất những cơ hội trong tương lai khi tôi không đọc sách vào một ngày như ${formattedDate}.`
    },
    { 
      tense: "Present Continuous", 
      sentence: `I am forfeiting a future of ${formattedMoney} by not reading today, ${formattedDate}.`,
      translation: `Tôi đang từ bỏ một tương lai trị giá ${formattedMoney} vì không đọc sách hôm nay, ${formattedDate}.`
    },
    { 
      tense: "Present Perfect", 
      sentence: `By not reading on ${formattedDate}, I have thrown away the seed that could have grown into ${formattedMoney}.`,
      translation: `Vì không đọc sách vào ngày ${formattedDate}, tôi đã vứt bỏ hạt giống lẽ ra có thể phát triển thành ${formattedMoney}.`
    },
    { 
      tense: "Present Perfect Continuous", 
      sentence: `I have been setting a precedent for loss since my decision on ${formattedDate}, a loss that will compound to ${formattedMoney}.`,
      translation: `Tôi đã và đang tạo ra một tiền lệ cho sự mất mát kể từ quyết định của mình vào ngày ${formattedDate}, một sự mất mát sẽ nhân lên thành ${formattedMoney}.`
    },
    { 
      tense: "Simple Past", 
      sentence: `I lost a future of ${formattedMoney} because I did not read on ${formattedDate}.`,
      translation: `Tôi đã đánh mất một tương lai trị giá ${formattedMoney} vì tôi đã không đọc sách vào ngày ${formattedDate}.`
    },
    { 
      tense: "Past Continuous", 
      sentence: `On ${formattedDate}, I was actively choosing a path that leads to losing ${formattedMoney}.`,
      translation: `Vào ngày ${formattedDate}, tôi đã (và đang) chủ động chọn con đường dẫn đến việc mất đi ${formattedMoney}.`
    },
    { 
      tense: "Past Perfect", 
      sentence: `By the end of ${formattedDate}, I had cemented a future loss of ${formattedMoney}.`,
      translation: `Tính đến cuối ngày ${formattedDate}, tôi đã củng cố một sự mất mát trong tương lai trị giá ${formattedMoney}.`
    },
    { 
      tense: "Past Perfect Continuous", 
      sentence: `I had been neglecting my future, a habit from ${formattedDate} that will cost ${formattedMoney}.`,
      translation: `Tôi đã liên tục bỏ bê tương lai của mình, một thói quen từ ngày ${formattedDate} sẽ tiêu tốn ${formattedMoney}.`
    },
    { 
      tense: "Simple Future", 
      sentence: `In ${years} years, I will miss out on ${formattedMoney} because of my inaction on ${formattedDate}.`,
      translation: `Trong ${years} năm nữa, tôi sẽ bỏ lỡ ${formattedMoney} vì sự thiếu hành động của mình vào ngày ${formattedDate}.`
    },
    { 
      tense: "Future Continuous", 
      sentence: `By this time in ${years} years, I will be feeling the absence of ${formattedMoney}, all stemming from ${formattedDate}.`,
      translation: `Vào thời điểm này ${years} năm nữa, tôi sẽ đang cảm nhận sự thiếu vắng của ${formattedMoney}, tất cả bắt nguồn từ ngày ${formattedDate}.`
    },
    { 
      tense: "Future Perfect", 
      sentence: `I will have lost ${formattedMoney} by this day in ${years} years' time for not waking up today, ${formattedDate}, to read a book.`,
      translation: `Tôi sẽ đã mất ${formattedMoney} vào ngày này sau ${years} năm nữa vì đã không thức dậy hôm nay, ${formattedDate}, để đọc sách.`
    },
    { 
      tense: "Future Perfect Continuous", 
      sentence: `In ${years} years, I will have been living with the consequences of a single choice on ${formattedDate}, a choice that cost me ${formattedMoney} in growth.`,
      translation: `Sau ${years} năm nữa, tôi sẽ đã phải sống với hậu quả của một lựa chọn duy nhất vào ngày ${formattedDate}, một lựa chọn đã khiến tôi mất đi ${formattedMoney} cho sự phát triển.`
    },
  ];

  return tenses;
};